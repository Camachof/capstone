const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(user, this.receiveCurrentUser);
  },
  login(user){
    SessionApiUtil.login(user, this.receiveCurrentUser);
  },
  logout(){
    SessionApiUtil.logout(this.receiveCurrentUser);
  },
  receiveCurrentUser(payload){
    console.log("made it here");
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: payload
    });
  }
};

module.exports = SessionActions;
