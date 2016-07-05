"use strict";

const ProjectApiUtil = {
  fetchAllProjects(filter, callback){
    $.ajax({
      url: '/api/projects',
      method: 'GET',
      data: {filter: filter},
      success(response){
        callback(response);
      }
    });
  },
  fetchProject(id, callback){
    $.ajax({
      url: `/api/projects/${id}`,
      method: 'GET',
      success(response){
        callback(response);
      }
    });
  },
  createProject(project, callback){
    $.ajax({
      url: `/api/projects/`,
      method: 'POST',
      data: {project: project},
      success(response){
        callback(response);
      }
    });
  },
};

module.exports = ProjectApiUtil;
