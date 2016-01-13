Rails.application.routes.draw do

  root "home#index"

  resources :users

  resources :folios do
    resources :elements
  end

  get "login" => "sessions#new"
  post "login" => "sessions#create"
  delete "logout" => "sessions#destroy"


  get 'auth/:provider/callback' => 'sessions#auth_create'
  post 'auth/:provider/callback' => 'sessions#auth_create'

  # get 'auth/:provider/callback' => 'sessions#twitter_create'
  # post 'auth/:provider/callback' => 'sessions#twitter_create'

  delete "logout" => "sessions#destroy"
  get 'logout' => 'sessions#destroy'

end
