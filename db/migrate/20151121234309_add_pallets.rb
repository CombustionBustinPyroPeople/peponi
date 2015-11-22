class AddPallets < ActiveRecord::Migration
  def change
    create_table :pallets do |t|
      t.string :name
      t.integer :longitude
      t.integer :latitutde
      t.boolean :is_active
    end
    create_table :shipments do |s|
      s.string :name
    end
    drop_table :posts
    drop_table :users
  end
end
