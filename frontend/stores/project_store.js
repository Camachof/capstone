const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants.js');

const ProjectStore = new Store(AppDispatcher);

let _projects = {};

ProjectStore.all = function(){
  return Object.keys(_projects).map( project => {
    return _projects[project];
  });
};

ProjectStore.resetStore = function(projects){
  _projects = {};

  projects.forEach( project => {
    debugger
    _projects[project.id] = project;
  });
};

ProjectStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      this.resetStore(payload.projects);
      ProjectStore.__emitChange();
      break;
  }
};

module.exports = ProjectStore;
