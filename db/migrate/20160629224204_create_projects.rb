class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :user_id, null: false
    end

    add_index :projects, :user_id
  end
end
