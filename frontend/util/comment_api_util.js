"use strict";

const CommentApiUtil = {
  createComment(comment, callback){
    $.ajax({
      url: `/api/comment/`,
      method: 'POST',
      data: {comment: comment},
      success(response){
        callback(response);
      }
    });
  }
};

module.exports = CommentApiUtil;
