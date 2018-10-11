var React = require('react');
var Input = require('./Input');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    errors: React.PropTypes.object
  },

  render: function() {
    return (
      <form onSubmit={this.props.onSave}>
        <h1>Manage Authors</h1>
        <Input
          label="First Name"
          name="firstName"
          placeholder="First Name"
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          value={this.props.author.firstName}
          error={this.props.errors.firstName}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          value={this.props.author.lastName}
          error={this.props.errors.lastName}
        />
        <input type="submit" value="Save" className="btn btn-default"/>
      </form>
    );
  }
});

module.exports = AuthorForm;
