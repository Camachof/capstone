# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Note Cycles

### Notes API Request Actions

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

### Notes API Response Actions

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
