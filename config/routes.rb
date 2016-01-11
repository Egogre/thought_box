Rails.application.routes.draw do
  root "links#index"

  resources :users
  resources :links

  get "/login", to: "sessions#new"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
