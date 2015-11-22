class AddBdSchemaToShipments < ActiveRecord::Migration
  def change
    add_column :shipments, :receiver, :string
    add_column :shipments, :destination, :string 
    add_column :shipments, :description, :string 
    add_column :shipments, :bol, :integer
    add_column :shipments, :custody, :string 
    add_column :shipments, :hasDamaged, :bit, :null => false
    add_column :shipments, :hasSeparated, :bit, :null => false
    add_column :shipments, :isLate, :bit, :null => false
    add_column :shipments, :latitude, :float
    add_column :shipments, :longitude, :float

    remove_column :pallets, :longitude
    remove_column :pallets, :latitutde
    remove_column :pallets, :is_active

    add_column :pallets, :weight, :integer
    add_column :pallets, :height, :integer
    add_column :pallets, :width, :integer
    add_column :pallets, :isDamaged, :bit, :null => false
    add_column :pallets, :isSeparated, :bit, :null => false
    add_column :pallets, :latitude, :float
    add_column :pallets, :longitude, :float
  end
end
