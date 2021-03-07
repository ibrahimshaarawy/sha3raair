class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :user
      t.string :pass

      t.timestamps
    end
  end
end
