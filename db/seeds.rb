# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# User.create!({username: 'martin', password: 'password'});
Project.create!({title: 'my test project', body: 'please please please work', user_id: 1});
Project.create!({title: 'my second project', body: 'mmmmmmmmmmmm', user_id: 1});
Project.create!({title: 'my third project', body: 'this has to work', user_id: 1});
