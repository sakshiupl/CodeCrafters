import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';
import {
  Grid, Typography, Paper
} from '@mui/material';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/userDetail';
import UserList from './components/userList/userList';
import UserPhotos from './components/userPhotos/userPhotos';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page_content: undefined
    };
    this.changeTopbarContent = this.changeTopbarContent.bind(this);
  }

  changeTopbarContent = (page_content) => {
    this.setState({ page_content: page_content });
  };


  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar page_content={this.state.page_content} />
        </Grid>
        <div className="main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper className="main-grid-item">
            <UserList />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="main-grid-item">
            <Switch>
            <Route exact path="/"
                render={() => (
                <Typography variant="body1">
                  Welcome to CodeCrafters photosharing app!
                </Typography>
                )}
              />
              <Route path="/users/:userId"
                render={ props => <UserDetail {...props} changeTopbarContent={this.changeTopbarContent} /> }
              />
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} changeTopbarContent={this.changeTopbarContent} /> }
              />
              <Route path="/users" component={UserList}  />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
      </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);
