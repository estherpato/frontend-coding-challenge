import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import PhoneDetailContainer from './PhoneDetailContainer.js';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneList: this.props.phoneList,
    }
  }

  render() {
    return (
      <Switch>
        <Route
          exact path="/"
          render={() =>
            <Home
              phoneList={this.state.phoneList} />
          } />
        <Route path="/child/:id" component={PhoneDetailContainer} />
      </Switch>
    );
  }
}

export default App;
