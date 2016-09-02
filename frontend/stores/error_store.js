const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants.js');

let _errors = {};
let _form = "Signup Form";

const ErrorStore = new Store(AppDispatcher);

ErrorStore.formErrors = function(){
  return _errors;
};

ErrorStore.form = function(){
  return _form;
};

const setErrors = function(payload) {
  _form = payload.form;
  _errors = payload.errors;
  ErrorStore.__emitChange();
};

const clearErrors = function() {
  _form = "";
  _errors = {};
  ErrorStore.__emitChange();
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
};

module.exports = ErrorStore;
