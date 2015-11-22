class UpdateSchemeWithSigfox < ActiveRecord::Migration
  def change
    remove_column :pallets, :weight
    remove_column :pallets, :height
    remove_column :pallets, :width
    remove_column :pallets, :isDamaged
    remove_column :pallets, :isSeparated
    remove_column :pallets, :shipment_id

    add_column :pallets, :device_id, :string
    add_column :pallets, :time, :datetime
    add_column :pallets, :seq_number, :int
    add_column :pallets, :tilt, :int

    add_column :shipments, :device_ids, :string
  end
end
