class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :logo

      t.timestamps
    end
  end
end
