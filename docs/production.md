# FresherNote

[heroku]: http://instructables.herokuapp.com/



## Features & Implementation

Search functionality will filter projects to match text in either the title or body of the project. The splash page transitions to a more compact view so results can be easily browsed.

// insert pic

Modals are used to preserve a linear user experience of the site. If a user attempts to create a new project without signing in, a modal will automatically pop up.

// inset pic of modal

Specific sign up/log in feedback is displayed immediately to avoid any confusion on the authentication requirements.

// insert pic of video in project

### Single-Page App



```ruby
class Api::SessionsController < ApplicationController
    def get_user
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
