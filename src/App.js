import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Customers from './customers';
import Rentals from './rentals';
import NotFound from './notFound';
import NavBar from './common/navBar';
import MovieForm from './movieForm';
import LoginForm from './loginForm';
import Logout from './logout'
import ProtectedRoute from './common/protectedRoute'
import auth from './services/authService';
import RegisterForm from './registerForm';
import "react-toastify/dist/ReactToastify.css"

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

  }
  render() {
    const {user} = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component = {MovieForm}
             />
            <Route path="/movies" render={props => <Movie {...props} user={this.state.user} />} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />

          </Switch>
          {/* <Movie/> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
