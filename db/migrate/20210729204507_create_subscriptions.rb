class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.string :period
      t.integer :user_id
      t.integer :service_id
      # t.belongs_to :user, null: false, foreign_key: true
      # t.belongs_to :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
