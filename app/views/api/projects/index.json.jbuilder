json.array! @projects do |project|
  debugger;
  json.extract!(project, :id, :title, :images, :author)
end
