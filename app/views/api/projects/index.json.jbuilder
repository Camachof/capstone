json.array! @projects do |project|
  json.extract!(project, :id, :title, :images, :author, :video_url, :comments, :body)
end
