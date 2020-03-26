import React, {Component} from 'react';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      session : null
    }
  }
  render(){
    let loginCompletePage = null;
    if(this.state.session !== null){
      loginCompletePage = (
        <MainPage
            onLogin={function(){
              this.setState({
                session : null
              });
            }.bind(this)}></MainPage>
      );
    }else if(this.state.session === null){
      loginCompletePage = (
        <LoginPage
            onLogin={function(_loginInfo){
                this.setState({
                  session : _loginInfo
                });
            }.bind(this)}></LoginPage>
      );
    }
    return (
      <div className="App">
        {loginCompletePage}
      </div>
    );
  }
}

export default App;
