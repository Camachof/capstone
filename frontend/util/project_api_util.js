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
<<<<<<< HEAD
  fetchDefaultProjects(callback){
    $.ajax({
      url: '/api/projects',
      method: 'GET',
      data: {filter: "break"},
      success(response){
        callback(response);
      }
    });
  },
=======
>>>>>>> f47837c2d2dcc6f5829102faa211fe6285c1480a
  fetchProject(id, callback){
    $.ajax({
      url: `/api/projects/${id}`,
      method: 'GET',
      success(response){
        callback(response);
      }
    });
  },
  createProject(project, callback, error){
    $.ajax({
      url: `/api/projects/`,
      method: 'POST',
      data: {project: project},
      success(response){
        callback(response);
      },
      error(message) {
        error("no form", message.responseJSON);
      }
    });
  },
  deleteProject(id, callback){
    $.ajax({
      url: `/api/projects/${id}`,
      method: 'DELETE',
      success(response){
        callback(response);
      }
    });
  },
  updateProject(project, callback){
    $.ajax({
      url: `/api/projects/${project.id}`,
      method: 'PATCH',
      data: {project: project},
      success(response){
        callback(response);
      }
    });
  },
};

module.exports = ProjectApiUtil;
