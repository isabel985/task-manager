import React, { Component } from 'react';
import './App.css';
import TasksPage from './containers/TasksPage';
import Header from './components/Header';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ProjectsPage from './containers/ProjectsPage';
import TeamMembersPage from './containers/TeamMembersPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Route path="/tasks" render={() => (<TasksPage />)} />
          <Route path="/projects" render={() => (<ProjectsPage />)} />
          <Route path="/teammembers" render={() => (<TeamMembersPage />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
