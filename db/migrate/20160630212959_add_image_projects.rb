class AddImageProjects < ActiveRecord::Migration
  def change
    add_column :projects, :images, :string
  end
end
