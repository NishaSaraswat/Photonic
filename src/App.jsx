import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory }
  from "react-router-dom";
import { withContext, useNamedContext, Style, If, Else }
  from 'react-easier';
import mongoosy from 'mongoosy/frontend';
import CameraPage from './pages/CameraPage';
import UploadPhotoPage from './UploadPhotoPage';


let photos = [], messages = [];

export default withContext('global', {
  // GLOBAL CONTEXT
  user: false,
  sseConnecton: false,
  display: null,
  photos,
  messages
}, function App() {

  // LOGIC
  const g = useNamedContext('global');


  // TEMPLATE
  return (
    <Router>
      <Switch>
        <Route path="/upload">
          <UploadPhotoPage />
        </Route>
        <Route path="/camera">
          <CameraPage />
        </Route>
      </Switch>
    </Router>
  ) 

})