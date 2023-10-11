import React from 'react';
import {
  TextField,
  Button
} from '@mui/material';
import './userDetail.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.setState({ userId: this.props.match.params.userId })
    }
  }

  render() {
    const {userId} = this.state;
    var userDetails = window.models.userModel(userId);
    return (
      <div>
        <Button
          variant="contained"
          size="medium"
          component={Link}
          to={`/photos/${userId}`}
          className="button"
        >
            USER PHOTOS
        </Button>
        <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="First Name"
          className="custom-field"
          value={userDetails.first_name}
        />
        <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Last Name"
          className="custom-field"
          value={userDetails.last_name}
        />
        <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Location"
          className="custom-field"
          value={userDetails.location}
        />
        <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Description"
          multiline
          rows={5}
          className="custom-field"
          value={userDetails.description}
        />
        <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Occupation"
          className="custom-field"
          value={userDetails.occupation}
        />
    </div>
    );
  }
}

export default UserDetail;
