"use strict";

$.ajax({
  url: `https://devru-instructables.p.mashape.com/json-api/showInstructable`,
  method: 'GET',
  data: {header:"xGHZrdqoyDmshHdoGrK7yQnroM7jp1TzsUFjsndFUXYRtjjXs3"},
  success(){
    console.log("yesss");
  }
});


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
