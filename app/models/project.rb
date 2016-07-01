class Project < ActiveRecord::Base

  belongs_to :author,
  class_name: "User",
  foreign_key: :user_id

  validates :title, :body, :user_id, :images, presence: true
end
