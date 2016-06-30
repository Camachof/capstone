const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants.js');
const ProjectApiUtil = require('../util/project_api_util.js');

module.exports= {
  fetchAllProjects(){
    ProjectApiUtil.fetchAllProjects(this.receiveAllProjects);
  },
  createProject(){
    ProjectApiUtil.createProject(this.receiveProject);
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
