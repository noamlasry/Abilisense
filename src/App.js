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
      go:"jhjh"
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }



    render(){
      
     
       return(
      
   
        <div className="App"   >
          
          { this.state.user ? ( <MainPage   title="f" /> ) : ( <Login /> ) }
          
      </div>
     
     
    )
};
}

export default App;
