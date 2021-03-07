class CreatePlanes < ActiveRecord::Migration[6.1]
  def change
    create_table :planes do |t|
      t.string :type
      t.integer :seatconfig

      t.timestamps
    end
  end
end
