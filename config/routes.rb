Rails.application.routes.draw do
  resources :portfolios, except: [:show]

  get 'portfolio/:id', to: 'portfolios#show', as: 'portfolio_show'
  get 'About-me', to: 'pages#About'
  get 'Contact', to: 'pages#Contact'
  resources :blogs
  # Setting the homepage
  root to: 'pages#Home'
end
