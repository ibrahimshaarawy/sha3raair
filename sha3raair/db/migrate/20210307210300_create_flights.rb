class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :destination
      t.string :departure
      t.belongs_to :plane, null: false, foreign_key: true

      t.timestamps
    end
  end
end
