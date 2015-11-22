module Api
  module V1
    class PalletsController < ApplicationController
      def index
        pallets = Pallet.find_each do |p|
          p
        end
        puts "pallets = #{pallets}"
        render json: pallets
      end

      def show
        pallet = Pallet.find(params[:id])
        render json: pallet
      end

      def create
        pallets = Pallet.new(pallet_params)
        if pallet.save
          render json: pallet, status: :created, location: api_v1_pallet_path(pallet)
        else
          render json: pallet.errors, status: :unprocessable_entity
        end
      end

      def update
        pallet = Pallet.find(params[:id])
        if pallet.update(pallet_params)
          render json: pallet
        else
          render json: pallet.errors, status: :unprocessable_entity
        end
      end

      def destroy
        pallet = Pallet.find(params[:id])
        pallet.destroy
        head :no_content
      end

      private
      def pallet_params
        params.require(:pallet).permit(:name, :longitude, :latitude, :is_active)
      end
    end
  end
end