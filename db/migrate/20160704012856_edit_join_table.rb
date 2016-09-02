class EditJoinTable < ActiveRecord::Migration
  def change
    rename_column :project_comments, :user_id, :comment_id
  end
end
