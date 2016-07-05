Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:create, :index, :update, :show]
  end

  namespace :api, defaults: {format: :json} do
    resource :comment, only: [:create]
  end

  root "static_pages#root"
end
