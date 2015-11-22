class Pallet < ActiveRecord::Base
  attr_accessor :name, :longitude, :latitude, :is_active
  belongs_to :shipment

end
