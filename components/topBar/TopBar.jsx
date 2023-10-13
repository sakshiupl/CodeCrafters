import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@mui/material';
import './TopBar.css';
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app_version: undefined
  };
  }

  componentDidMount() {
    this.handleAppVersionChange();
}

 handleAppVersionChange(){
    const app_version = this.state.app_version;
    if (app_version === undefined){
        fetchModel("/test/info")
            .then((response) =>
            {
                this.setState({
                    app_version: response.data
                });
            });
    }
}

  render() {
   const {app_version} = this.state;
    return app_version ? (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar className='topbar'>
          <Typography variant="h5" color="inherit">
              This is Code Crafters TopBar component
          </Typography>
          <Typography variant="h5" color="inherit">
              {this.props.page_content}
          </Typography>
          <Typography variant="h5" component="div" color="inherit">Version: {this.state.app_version.__v}</Typography> 
  
        </Toolbar>
      </AppBar>
    ) : (
      <div />
    );
  }
}

export default TopBar;
