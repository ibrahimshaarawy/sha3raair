class CreatePlanes < ActiveRecord::Migration[6.1]
  def change
    create_table :planes do |t|
      t.string :type
      t.integer :seatconfig, array: true, default: []

      t.timestamps
    end
  end
end
