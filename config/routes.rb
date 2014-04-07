SeattleParking::Application.routes.draw do
  root 'welcome#home'
  resources :locations
end
