class CreateColors < ActiveRecord::Migration[6.0]
  def change
    create_table :colors do |t|
      t.string :name
      t.string :hexcode_i
      t.string :hexcode_ii

      t.timestamps
    end
  end
end
