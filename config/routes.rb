
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:create, :index, :update, :show, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :comments, only: [:create, :destroy]
  end

  root "static_pages#root"
end
