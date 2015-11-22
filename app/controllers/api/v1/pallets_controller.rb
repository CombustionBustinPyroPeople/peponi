module Api
  module V1
    class PalletsController < ApplicationController

      def get
        id = params[:id].to_i
        pallet = Pallet.find(id)
        shipment = nil
        Shipment.find_each do |s|
          ids = s.device_ids.split(",")
          ids.each do |id|
            shipment = s if id == pallet.device_id
          end
        end

        hash = pallet.as_json
        hash[:shipment] = shipment.as_json
        return json: hash
      end

      def get_all
        pallets = Pallet.all
        return json: pallets
      end
    end
  end
end