json.array! @projects do |project|
  json.extract!(project, :id, :title, :images, :author)
end
