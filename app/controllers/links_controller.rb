class LinksController < ApplicationController
  before_action :authenticate_user

  def index
    
  end

  def create
    link = Link.new(link_params)
    if link.save
      session[:link_id] = link.id
      redirect_to root_path
    else
      flash[:errors] = link.errors.full_messages.join(", ")
      redirect_to login_path
    end
  end

  private

  def user_params
    params.require(:link).permit(:url, :title)
  end

end
