import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.js';
import PhoneDetailContainer from './PhoneDetailContainer.js';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneList: [],
    }
  }

  componentDidMount() {
    this.getPhoneList();
  }

  getPhoneList() {
    axios.get('http://localhost:3001/phones')
  .then(response => {
    this.setState({ phoneList: response.data.phones })
  })
  .catch(function (error) {
    console.log(error);
  });
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
        <Route
          path="/phone/:id"
          render={(props) =>
            <PhoneDetailContainer
              match={props.match}
              phoneList={this.state.phoneList} />
          } />
      </Switch>
    );
  }
}

export default App;