class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :id
      t.string :depart
      t.string :destination
      t.has_one :plane

      t.timestamps
    end
  end
end
