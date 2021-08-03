Rails.application.routes.draw do
  resources :subscriptions, only:[:index, :create]
  resources :services, only: [:index]
  resources :users, only: [:show, :index, :create]
  resources :log_in, only: [:create]
  # resources :sessions, only [:destroy]
  
  get "/me", to: "users#show"
  # post "/signin", to: "log_in#create"
  # delete "/signin", to: "log_in#destroy"

  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
