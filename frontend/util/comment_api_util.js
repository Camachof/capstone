"use strict";

const CommentApiUtil = {
  createComment(comment, callback){
    $.ajax({
      url: `/api/comments/`,
      method: 'POST',
      data: {comment: comment},
      success(response){
        callback(response);
      }
    });
  },
  deleteComment(id, callback){
    $.ajax({
      url: `/api/comments/${id}`,
      method: 'DELETE',
      success(response){
        callback(response);
      }
    });
  }
};

module.exports = CommentApiUtil;
