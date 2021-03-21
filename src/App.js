import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import User from './component/users/User';

import GithubState from './component/context/github/GithubState';
import AlertState from './component/context/alert/AlertState';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';


const App = () => {


  // async componentDidMount() {
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GIT_CLIENT}&client_secret=$
  //   {process.env.REACT_APP_GIT_CLIENT_SECRET}`);
      
  //   this.setState({ users: res.data, loading: false});
  // }

  

    return (
      <GithubState>
        <AlertState>
          <Router>
              <Navbar  />
              <div className='container'>
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  
}

export default App;
