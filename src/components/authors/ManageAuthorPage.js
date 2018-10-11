var React = require('react');
var AuthorForm = require('./AuthorForm');
var AuthorActions = require('../../actions');
var AuthorStore = require('../../stores/authorStore');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  statics: {
    willTransitionFrom: function(transition, component) {
      if(component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var authorId = this.props.params.id;
    if (authorId) {
      this.setState({
        author: AuthorStore.getAuthorById(authorId)
      });
    }
  },

  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;

    this.state.author[field] = value;
    return this.setState({ author: this.state.author, dirty: true });
  },

  clearErrors: function(event) {
    var field = event.target.name;
    this.state.errors[field] = "";
    this.setState({
      errors: this.state.errors
    });
  },

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({
      errors: this.state.errors
    });

    return formIsValid;
  },

  saveAuthor: function(event) {
    event.preventDefault();
    if(!this.authorFormIsValid()) { return event.stopPropagation(); }
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author)
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
    this.setState({ dirty: false });
    toastr.success('Author saved');
    this.transitionTo('authors');
  },

  render: function() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        onFocus={this.clearErrors}
        errors={this.state.errors}
      />
    );
  }
});

module.exports = ManageAuthorPage;