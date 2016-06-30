## Heroku!

https://instructables.herokuapp.com/

## DEstructables

DEstructables is a web application inspired by Instructables that will be build using Ruby on Rails and React.js.

## MVP Checklist Format

0. New account creation, login, and guest/demo login
0. A production README, replacing this README (NB: check out the sample production README -- you'll write this later)
0. Hosting on Heroku
0. Projects
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Commenting on projects
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Adding photos and videos to projects
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Searching projects by keyword
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature

## Wireframes

https://www.draw.io/#Lproject_detail.xml
<<<<<<< HEAD
https://www.draw.io/#Lroot_project.xml
https://www.draw.io/#Lproject_textEditor.xml
https://www.draw.io/#Lproject_new.xml
=======

https://www.draw.io/#Lproject_new.xml

https://www.draw.io/#Lproject_textEditor.xml

https://www.draw.io/#Lroot_project.xml
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * ProjectsIndex
    * Search
    * ProjectSlide
  * **ProjectItem**
    * ProjectItemNavbar
    * ProjectItemCommentForm
  * **ProjectForm**
  * **ProjectUser**

## Routes

Definetly need help figuring this out!

* **component:** `App` **path:** `/`
  * **component:** `ProjectsIndex` **path:** index
  * **component:** `ProjectIndexItem` **path:** `project/:projectId`
  * **component:** `ProjectUser` **path:** `project/:userId`


## Flux Cycles

### Projects API Request Actions

* `fetchAllProjects`
  0. invoked from `ProjectsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/projects` is called.
  0. `receiveAllProjects` is set as the callback.

* `createProject`
  0. invoked from `PUBLISH` button `onClick`
  0. `POST /api/projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `fetchSingleProject`
  0. invoked from `ProjectItem` `didMount`/`willReceiveProps`
  0. `GET /api/project/:id` is called.
  0. `receiveSingleProject` is set as the callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  0. `POST /api/projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `destroyProject`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/project/:id` is called.
  0. `removeProject` is set as the callback.

### Projects API Response Actions

* `receiveAllProjects`
  0. invoked from an API callback.
  0. `ProjectsStore` store updates `_projects` and emits change.

* `receiveSingleProjects`
  0. invoked from an API callback.
  0. `ProjectsStore` store updates `_projects[id]` and emits change.

* `removeProjects`
  0. invoked from an API callback.
  0. `ProjectsStore` store removes `_projects[id]` and emits change.

### Store Listeners

* `ProjectsIndex` component listens to `Project` store.
* `ProjectItem` component listens to `Project` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `Search` `onChange` when there is text
  0. `GET /api/projects` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `Search` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `Search` component listens to `SearchSuggestion` store.

## Schema

See docs/database.md in the repo.

## API Endpoints

See docs/api.md in the repo.

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

Objective: Functioning rails project with Authentication

<<<<<<< HEAD
 * create new project
 * create User model
 * authentication
 * user signup/signin pages
 * blank landing page after signin
=======
 - [ ] create new project
 - [ ] create User model
 - [ ] authentication
 - [ ] user signup/signin pages
 - [ ] blank landing page after signin
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

### Phase 2: Project Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

Objective: Project can be created, read, edited and destroyed through the API.

<<<<<<< HEAD
 * create Project model
 * seed the database with a small amount of test data
 * CRUD API for projects (ProjectsController)
 * jBuilder views for projects
 * setup Webpack & Flux scaffold
 * setup APIUtil to interact with the API
 * test out API interaction in the console.
=======
 - [ ] create Project model
 - [ ] seed the database with a small amount of test data
 - [ ] CRUD API for projects (ProjectsController)
 - [ ] jBuilder views for projects
 - [ ] setup Webpack & Flux scaffold
 - [ ] setup APIUtil to interact with the API
 - [ ] test out API interaction in the console.
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

Objective: Projects can be created, read, edited and destroyed with the user interface.

<<<<<<< HEAD
 * setup the flux loop with skeleton files
 * setup React Router
 * implement each project component, building out the flux loop as needed.
 * ProjectsIndex
 * ProjectItem
 * ProjectForm
=======
 - [ ] setup the flux loop with skeleton files
 - [ ] setup React Router
 - [ ] implement each project component, building out the flux loop as needed.
 - [ ] ProjectsIndex
 - [ ] ProjectItem
 - [ ] ProjectForm
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86
 <!--* ProjectUser ?-->

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

Objective: Existing pages (including signup/signin) will look good.

<<<<<<< HEAD
 * create a basic style guide
 * position elements on the page
 * add basic colors & styles
=======
 - [ ] create a basic style guide
 - [ ] position elements on the page
 - [ ] add basic colors & styles
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

### Phase 5: Comments (1 day, W2 Tu 12pm)

Objective: Comments belong to Projects

<<<<<<< HEAD
* create comments model
* build out API, Flux loop, and components for:
 * Comments CRUD
 * comments requires a project
* Use CSS to style new views
=======
- [ ] create comments model
- [ ] build out API, Flux loop, and components for:
 - [ ] Comments CRUD
 - [ ] comments requires a project
- [ ] Use CSS to style new views
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

### Phase 6: Tags (1 days, W2 Th 12pm)

Objective: Projects can be tagged with multiple tags, and tags are searchable.

<<<<<<< HEAD
 * create Tag model and join table
 * build out API, Flux loop, and components for:
  * fetching tags for projects
  * adding tags to projects
  * creating tags while adding to projects
  * searching projects by tag
 * Style new elements
=======
 - [ ] create Tag model and join table
 - [ ] build out API, Flux loop, and components for:
  - [ ] fetching tags for projects
  - [ ] adding tags to projects
  - [ ] creating tags while adding to projects
  - [ ] searching projects by tag
 - [ ] Style new elements
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

### Phase 7: Allow Complex Styling in Notes (0.5 days, W2 Th 6pm)

objective: Enable complex styling of projects.

<<<<<<< HEAD
 * Integrate Draft.js to make projects!!!
 * Use Rails helpers to sanitize HTML before rendering.
=======
 - [ ] Integrate Draft.js to make projects!!!
 - [ ] Use Rails helpers to sanitize HTML before rendering.
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

objective: Make the site feel more cohesive and awesome.

<<<<<<< HEAD
 * Get feedback on my UI from others
 * Refactor HTML classes & CSS rules
 * Add modals, transitions, and other styling flourishes.
=======
 - [ ] Get feedback on my UI from others
 - [ ] Refactor HTML classes & CSS rules
 - [ ] Add modals, transitions, and other styling flourishes.
>>>>>>> 7a6446b7651417366463163c229bf0ba43133c86

Bonus Features (TBD)

Develop featured project channels
Create categories for projects
