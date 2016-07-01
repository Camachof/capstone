"use strict";

const ProjectApiUtil = {
  fetchAllProjects(callback){
    $.ajax({
      url: '/api/projects',
      method: 'GET',
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
      url: `/api/projects/${project.id}`,
      method: 'POST',
      success(response){
        callback(response);
      }
    });
  },
};

module.exports = ProjectApiUtil;
