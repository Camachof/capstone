# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!({username: 'martin', password: 'password'});
Project.create!({title: 'my test project', body: 'please please please work', user_id: 1, images: "http://res.cloudinary.com/doilr7vvv/image/upload/v1467322615/robotronico_nmours.png"});
Project.create!({title: 'my second project', body: 'mmmmmmmmmmmm', user_id: 1, images: "http://res.cloudinary.com/doilr7vvv/image/upload/v1467322584/Arduino_c9vjcg.png"});
Project.create!({title: 'my third project', body: 'this has to work', user_id: 1, images: "http://res.cloudinary.com/doilr7vvv/image/upload/v1467322453/arduino-white-background_h7y74h.png"});
