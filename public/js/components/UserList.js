var UserList = React.createClass({
  render: function () {

    var users = [];
    for (var ix in this.props.users) {
      users.push(React.createElement(
        "li",
        null,
        this.props.users[ix].name
      ));
    }

    return React.createElement(
      "ul",
      { className: "userList" },
      users
    );
  }
});