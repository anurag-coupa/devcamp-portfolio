Rails.application.routes.draw do
  resources :portfolios
  get 'About-me', to: 'pages#About'
  get 'Contact', to: 'pages#Contact'
  resources :blogs
  # Setting the homepage
  root to: 'pages#Home'
end
