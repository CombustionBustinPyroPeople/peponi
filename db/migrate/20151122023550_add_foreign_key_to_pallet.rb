class AddForeignKeyToPallet < ActiveRecord::Migration
  def change
    add_column :pallets, :shipment_id, :integer
  end
end
