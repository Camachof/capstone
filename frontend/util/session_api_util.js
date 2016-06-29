"use strict";

const SessionApiUtil = {
  signup(user, success){
    $.ajax({
      url: 'api/user',
      method: 'POST',
      data: {user},
      success,
      error: function () {
			  console.log("Signup error in SessionApiUtil#signup");
			}
    });
  },
  login(user, success){
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: {user},
      success,
      error: function () {
			  console.log("Login error in SessionApiUtil#login");
			}
    });
  },
  logout(success){
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success,
      error: function () {
			  console.log("Logout error in SessionApiUtil#logout");
			}
    });
  },
};

module.exports = SessionApiUtil;
