class AddOriginToShipments < ActiveRecord::Migration
  def change
    add_column :shipments, :origin, :string
  end
end
