Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show] do
      resources :songs, only: [:show]
      resources :likesongs, only: [:index]
      resources :likeartists, only: [:index]
      resources :likealbums, only: [:index]
    end
    resources :songs, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:show, :update, :index, :create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :playlistsongs, only: [:create, :destroy]
    resources :likesongs, only: [:create, :destroy]
    resources :likeartists, only: [:create, :destroy]
    resources :likealbums, only: [:create, :destroy]
  end


end
