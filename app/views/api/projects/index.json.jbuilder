json.array! @projects do |project|
  json.extract!(project, :id, :title, :images, :author, :video_url, :comments, :body, :material, :description)
  if project.created_at
    json.date project.created_at.localtime.to_formatted_s(:long)
  end
end
