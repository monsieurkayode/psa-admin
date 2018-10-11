var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
   addChangeListener: function(callback) {
     this.on(CHANGE_EVENT, callback);
   },

   removeChangeListener: function(callback) {
     this.removeListener(CHANGE_EVENT, callback);
   },

   emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

   getAllAuthors: function() {
     return _authors;
   },

   getAuthorById: function(id) {
     return _.find(_authors, { id: id });
   }
});

Dispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, { id: action.author.id });
      var existingAuthorIndex = _.findIndex(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return author.id === action.id;
      });
      AuthorStore.emitChange();
      break;
    default:
  }
});

module.exports = AuthorStore;
