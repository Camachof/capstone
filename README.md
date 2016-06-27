= Summary

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
https://www.draw.io/#Lroot_project.xml
https://www.draw.io/#Lproject_textEditor.xml
https://www.draw.io/#Lproject_new.xml
  
## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * ProjectsIndex
    * Search
    * ProjectSlide
  * **ProjectItem**
    * ProjectItemNavbar
    * ProjectItemCommentForm
  * ProjectForm
  * **ProjectUser**
    
## Routes

* **component:** `App` **path:** `/`
  * component: `ProjectsIndex` **path:** index
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


  
