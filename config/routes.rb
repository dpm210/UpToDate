Rails.application.routes.draw do
  resources :subscriptions, only:[:index, :create]
  resources :services, only: [:index]
  resources :users, only: [:show, :index, :create]
  resources :log_in, only: [:create]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
