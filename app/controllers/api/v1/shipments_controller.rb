module Api
  module V1
    class ShipmentsController < ApplicationController
      
      def get
        id = params[:id].to_i
        shipment = Shipment.find(id)
        pallets = []
        ids = shipment.device_ids.split(",")
        ids.each do |device_id|
          p = Pallet.where(:device_id => device_id)
          pallets.push(p) if p.present?
        end
        hash = shipment.as_json
        hash[:pallets] = pallets.as_json
        render json: hash 
      end

      def get_all
        shipments = Shipment.all
        render json: shipments.as_json
      end

    end
  end
end