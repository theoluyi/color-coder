Rails.application.routes.draw do
  resources :notes, only: [:index, :show, :create, :destroy]
  resources :colors
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
