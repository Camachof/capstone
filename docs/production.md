# Destructables

[heroku]: http://instructables.herokuapp.com/

Destructables is a place to find code for humans; step by step instructions on how to build (or destroy) anything.

It takes inspiration from instructables.com but uses Rails, React and Posgres to explore the possibilities of a single-page site.

## Features

Search functionality will filter projects to match text in either the title or body of the project. The splash page transitions to a more compact view so results can be easily browsed.

![search-screenshot]
[search-screenshot]: ./Search.png

Modals are used to preserve a linear user experience of the site. If a user attempts to create a new project without signing in, a modal will automatically pop up.

![Alt text](./Modal.jpg)

Specific sign up/log in feedback is displayed immediately to avoid any confusion on the authentication requirements.

![Alt text](./Log_in.jpg)

## Implementation

Destructables has it's own authentication pattern that keeps user's passwords safe by using the BCrypt gem:

```ruby
def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end
  ```

Unless a search is performed, only one ajax request is necessary to navigate the whole site. Through associations, all relevant information is fetched. This pattern could easily be altered for scaling.

```ruby
class Project < ActiveRecord::Base

  belongs_to :author,
    class_name: "User",
    foreign_key: :user_id

  has_many :comments
```

The production of a new project is so streamlined that all content was seeded using the site and seed_dump gem:

![Alt text](./form.jpg)


## Future Directions for the Project

The next feature to be implemented will be a rich text editor using React-Quill. This will give users a wider range of tools to organize content.

Eventually, users will be able to associate images with blocks of text so that every step in the instructions has a visual aid.

Project categories will make browsing more efficient and will allow the splash page to feature a specific type of content.

Finally, users will bee able to search directly from the carousel on the splash page.
