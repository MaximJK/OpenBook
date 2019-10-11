Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :bookshelves, only: [:show, :index, :destroy, :create, :update]
    resources :bookshelf_books, only: [:create, :delete]
    resources :books, only: [:show, :index] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:show, :create, :update, :destroy]
  end
end