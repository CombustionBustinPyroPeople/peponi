class AddDefaults < ActiveRecord::Migration
  def change
    change_column_default :shipments, :hasDamaged, 0
    change_column_default :shipments, :hasSeparated, 0
    change_column_default :shipments, :isLate, 0

    change_column_default :pallets, :isSeparated, 0
    change_column_default :pallets, :isDamaged, 0
  end
end
