Rails.application.routes.draw do

  root "users#index"

  resources :users

  resources :folios do
    resources :elements
  end

  get "login" => "sessions#new"
  post "login" => "sessions#create"
  delete "logout" => "sessions#destroy"

end
