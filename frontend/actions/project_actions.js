const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants.js');
const ProjectApiUtil = require('../util/project_api_util.js');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

module.exports= {
  fetchAllProjects(){
    ProjectApiUtil.fetchAllProjects(this.receiveAllProjects);
  },
  fetchProject(id){
    ProjectApiUtil.fetchProject(id, this.receiveProject);
  },
  createProject(project, callback){
    ProjectApiUtil.createProject(project, (payload) => {
      this.receiveProject(payload);
      callback(payload);
    });
  },

  receiveAllProjects(payload){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: payload
    });
  },
  receiveProject(payload){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: payload
    });
  }
};
