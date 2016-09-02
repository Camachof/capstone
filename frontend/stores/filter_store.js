const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const FilterConstants = require('../constants/filter_constants.js');

const FilterStore = new Store(AppDispatcher);

let _filters = {};

FilterStore.filter = function(){
  return _filters;
};

FilterStore.newFilter = function(filter){
  _filters = {filter};
};

FilterParamsStore.__onDispatch = function(payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_MAX_SEATING:
      setMaxSeating(payload.maxSeating);
      break;
  }
};

module.exports = FilterStore;
