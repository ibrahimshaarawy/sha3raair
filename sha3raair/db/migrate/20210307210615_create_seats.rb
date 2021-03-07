class CreateSeats < ActiveRecord::Migration[6.1]
  def change
    create_table :seats do |t|
      t.string :pnr
      t.boolean :available
      t.integer :price
      t.belongs_to :flight, null: false, foreign_key: true

      t.timestamps
    end
  end
end
