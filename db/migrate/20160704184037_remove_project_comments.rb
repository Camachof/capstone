class RemoveProjectComments < ActiveRecord::Migration
  def change
    drop_table :project_comments
  end
end
