class Pallet < ActiveRecord::Base
  attr_accessor :name, :weight, :height, :width, :isDamaged, :isSeparated, :latitude, :longitude
  belongs_to :shipment

end
