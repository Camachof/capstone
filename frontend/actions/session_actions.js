const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('../actions/error_actions');

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  login(user){
    SessionApiUtil.login(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logout(){
    SessionApiUtil.logout(this.receiveCurrentUser, ErrorActions.setErrors);
  },
  receiveCurrentUser(payload){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: payload
    });
  }
};

module.exports = SessionActions;
