const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants.js');

const ProjectStore = new Store(AppDispatcher);

let _projects = {};
let _defaultProjects = {};
let _defaults = false;

ProjectStore.all = function(){
  return Object.keys(_projects).map( key => {
    return _projects[key];
  });
};

ProjectStore.allDefaults = function(){
  return Object.keys(_defaultProjects).map( key => {
    return _defaultProjects[key];
  });
};

ProjectStore.defaults = function(){
  return _defaults;
};

ProjectStore.resetStore = function(projects){
  _defaults = false;
  _projects = {};

  projects.forEach( project => {
    _projects[project.id] = project;
  });
};

ProjectStore.resetDefaults = function(projects){
  debugger;
  _defaults = true;
  _defaultProjects = {};

  projects.forEach( project => {
    _defaultProjects[project.id] = project;
  });
};

ProjectStore.addProject = function(project){
  _projects[project.id] = project;
};

ProjectStore.removeProject = function(id){
  delete _projects[id];
};

ProjectStore.find = function(id){
  return _projects[id];
};

ProjectStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      this.resetStore(payload.projects);
      ProjectStore.__emitChange();
      break;
    case ProjectConstants.DEFAULTS_RECEIVED:
      this.resetDefaults(payload.project);
      ProjectStore.__emitChange();
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      this.addProject(payload.project);
      ProjectStore.__emitChange();
      break;
    case ProjectConstants.PROJECT_DELETED:
      this.removeProject(payload.project.id);
      ProjectStore.__emitChange();
      break;
  }
};

module.exports = ProjectStore;
