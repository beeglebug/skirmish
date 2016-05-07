var UserList = React.createClass({
  render: function() {
    var users = [];
    for(var ix in this.props.users) {
      users.push(<li>{this.props.users[ix].name}</li>);
    }
    return (
      <ul className="userList">
        {users}
      </ul>
    );
  }
});