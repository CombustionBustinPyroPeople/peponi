Ebenezer::Application.routes.draw do

  namespace :api, defaults: {format: "json"} do
    namespace :v1 do
      get 'pallets',         to: 'pallets#get_all'
      get 'pallets/:id',     to: 'pallets#get'

      get 'shipments',       to: 'shipments#get_all'
      get 'shipments/:id',   to: 'shipments#get'
    end
  end

end