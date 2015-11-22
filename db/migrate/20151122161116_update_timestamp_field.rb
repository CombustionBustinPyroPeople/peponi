class UpdateTimestampField < ActiveRecord::Migration
  def change
    remove_column :pallets, :time

    add_column :pallets, :time, :integer
  end
end
