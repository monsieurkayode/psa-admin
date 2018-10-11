var Dispatcher = require('../dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      type: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },

  getAllAuthors: function() {
    var authors = AuthorApi.getAllAuthors();

    Dispatcher.dispatch({
      type: ActionTypes.GET_AUTHORS,
      authors: authors
    });
  },

  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      type: ActionTypes.CREATE_AUTHOR,
      author: updatedAuthor
    });
  },

  deleteAuthor: function(id) {
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      type: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

module.exports = AuthorActions;
