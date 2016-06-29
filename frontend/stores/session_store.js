const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants.js');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

const _logIn = function(currentUser){
  _currentUser = currentUser;
};

const _logOut = function(){
  _currentUser = {};
};

SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.isUserLoggedIn = function(){
  return _currentUser.id;
};

SessionStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _logIn(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logOut(payload);
      SessionStore.__emitChange();
      break;

  }
};

module.exports = SessionStore;
