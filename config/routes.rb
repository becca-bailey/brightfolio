Rails.application.routes.draw do

  root "home#index"

  resources :users

  resources :folios, except: :show do
    resources :elements
  end
# resources :books, except: :update
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
