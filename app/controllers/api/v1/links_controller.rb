class Api::V1::LinksController < ApplicationController
  respond_to :json

  def index
    respond_with Link.where(user_id: current_user.id)
  end

  def create
    params["link"]["user_id"] = current_user.id
    respond_with :api, :v1, Link.create(link_params)
  end

  def update
    respond_with :api, :v1, Link.update(params[:id], link_params)
  end

  def destroy
    respond_with :api, :v1, Link.destroy(params[:id])
  end

  private

  def link_params
    params.require(:link).permit(:title, :url, :read, :user_id)
  end

end
