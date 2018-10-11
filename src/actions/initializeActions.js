var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitializeActions = {
  initApp: function() {
    var authors = AuthorApi.getAllAuthors();

    Dispatcher.dispatch({
      type: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions;
