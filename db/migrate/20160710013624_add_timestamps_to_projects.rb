class AddTimestampsToProjects < ActiveRecord::Migration
  def change
    add_column(:projects, :created_at, :datetime)
    add_column(:comments, :created_at, :datetime)
  end
end
