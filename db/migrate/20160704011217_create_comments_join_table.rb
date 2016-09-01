class CreateCommentsJoinTable < ActiveRecord::Migration
  def change
    create_table :project_comments do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false
    end

    add_index :project_comments, :user_id
    add_index :project_comments, :project_id

  end
end
