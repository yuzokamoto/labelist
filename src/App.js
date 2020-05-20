import React from 'react';
import styled from 'styled-components';

import LoginPage from './components/LoginPage';
import LoggedPage from './components/LoggedPage';

const Labelist = styled.div`
  background: #323B3F;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  loginHandler = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  componentDidMount = () => {
    let loginStatus = localStorage.getItem('isLoggedIn')
    if (loginStatus) {
      this.setState({isLoggedIn: JSON.parse(loginStatus)});
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.state.isLoggedIn));
  }

  render() {
    return (
      <Labelist>
          {this.state.isLoggedIn ? <LoggedPage
            loginHandler={this.loginHandler}
          />
          : <LoginPage
            loginHandler={this.loginHandler}
          />}
      </Labelist>
    );
  }
}

export default App;
