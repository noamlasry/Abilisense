import React, { Component } from 'react';
import Login from "./components/login/login";
import './App.css';
import MainPage  from "./components/mainPage/mainPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fire from './components/login/config/fire'


class App extends Component{

   
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      go:"h"
    };
    console.log("constactor");
    this.authListener = this.authListener.bind(this);
    
  }
  componentWillMount(){
  //  this.authListener();
    console.log("componentWillMount()");
  }

  componentDidMount() {
    this.authListener();
    this.setState({go:this.setState.user})
    console.log("componentDidMount()");
    
  }

  authListener() {
    console.log("authListener() ");
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
       let userName =  this.getUserName(user.email);
        this.setState({ user:userName });
      } else {
      
        this.setState({ user: null });
      }
    })
    
  }

  getUserName(userName)
  {
    let i = 0;
    for (; i < userName.length; i++) {
     if(userName[i]==='@')
       break;
    }
      var newUserName = userName.substring(0, i);
      return newUserName;
  }

    render(){
      
      console.log("render ");
       return(
        <div className="App"  >
          { this.state.user ? ( <MainPage title={this.state.user}/> ) : ( <Login /> ) }
        </div>
    )
};
}

export default App;
