import React from 'react';
import {
  TextField,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
    }
  }

  render() {
    const {userId} = this.state;
    var userPhotosDetails = window.models.photoOfUserModel(userId);
    return (
      <div>
        <Button
          variant="contained"
          size="medium"
          component={Link}
          to={`/users/${userId}`}
          className="button"
        >
            USER DETAIL
        </Button>

        {userPhotosDetails.map((userPhotoDetail) => (
          <div key={userPhotoDetail._id}>
          <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Photo Date"
          className="custom-field"
          value={userPhotoDetail.date_time}
        />
        <img
        src={`/images/${userPhotoDetail.file_name}`} // Replace with the URL of your image
        alt="Description of the image"
        className='custom-field'
      />

        {userPhotoDetail.comments && userPhotoDetail.comments.map((userComment) => (
          <div>
          <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Comment Date"
          className="custom-field"
          value={userComment.date_time}
        />
      
               
                    <TextField
                      
                      fullWidth
                      id="outlined-disabled"
                      component={Link}
                      to={`/users/${userComment.user._id}`}
                      label="User"
                      className="custom-field user-link"
                      value={`${userComment.user.first_name} ${userComment.user.last_name}`}
                    />
                 
        
        <TextField
         disabled
         fullWidth
         id="outlined-disabled"
         label="Comment"
         multiline
         rows={5}
         className="custom-field"
         value={userComment.comment}
        />
         </div>
        ))}  
        </div>
        ))}
      </div>
    );
  }
}

export default UserPhotos;



