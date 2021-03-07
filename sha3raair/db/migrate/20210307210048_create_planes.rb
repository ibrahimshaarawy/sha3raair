class CreatePlanes < ActiveRecord::Migration[6.1]
  def change
    create_table :planes do |t|
      t.string :planeType
      t.integer :seatConfig, array: true, default: []

      t.timestamps
    end
  end
end
