Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:show, :index]
    resources :playlists, only: [:show, :update, :index, :create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :playlistsongs, only: [:create, :destroy]
  end
  resources :songs, only: [:show]
end
