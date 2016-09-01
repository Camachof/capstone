const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants.js');
const CommentApiUtil = require('../util/comment_api_util.js');
const ProjectActions = require('./project_actions.js');

module.exports= {
  createComment(comment, callback){
    CommentApiUtil.createComment(comment, ProjectActions.receiveProject);
  },
  deleteComment(id, callback){
    CommentApiUtil.deleteComment(id, ProjectActions.receiveProject);
  },
};
