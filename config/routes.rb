# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  devise_for :admin_users, ActiveAdmin::Devise.config

  # We introspect the models to create the admin interface
  # https://github.com/activeadmin/activeadmin/issues/783#issuecomment-244587442
  ActiveAdmin.routes(self) rescue ActiveAdmin::DatabaseHitDuringLoad

  mount MissionControl::Jobs::Engine, at: "/jobs"

  constraints lambda { |req| !req.xhr? && req.format.html? && !req.path.starts_with?("/api/") && !req.path.starts_with?("/rails/") && !req.path.starts_with?("/jobs") } do # rubocop:disable Layout/LineLength
    get "*path", to: "frontend#root"
  end
  root to: "frontend#root", via: :get
end
