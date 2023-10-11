import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@mui/material';
import { Link } from 'react-router-dom';
import './userList.css';

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userListModel: window.models.userListModel(),
    }
  }

  render() {
    const { userListModel } = this.state;
    return (
      <div>
        {userListModel.map((user) => (
          <Link to={`/users/${user._id}`} key={user._id} className="userlink">
            <List component="nav" className="userlist">
              <ListItem>
                <ListItemText primary={`${user.first_name} ${user.last_name}`} />
              </ListItem>
              <Divider />
            </List>
          </Link>
        ))}
      </div>
    );
  }
}

export default UserList;
