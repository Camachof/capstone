"use strict";

const SessionApiUtil = {
  signup(user, success, error){
    $.ajax({
      url: 'api/user',
      method: 'POST',
      data: {user},
      success,
      error(message) {
			  error("signup", message.responseJSON);
			}
    });
  },
  login(user, success, error){
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: {user},
      success,
      error(message) {
			  error("login", message.responseJSON);
			}
    });
  },
  logout(success){
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success,
      error(message) {
			  error("logout", message.response.JSON);
			}
    });
  },
};

module.exports = SessionApiUtil;
