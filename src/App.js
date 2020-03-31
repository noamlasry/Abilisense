import React, { Component } from 'react';
import Login from "./components/login/login";
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import MainPage  from "./components/mainPage/mainPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fire from './components/login/config/fire'
import Navigationbar from './components/navigationbar/navigationbar'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user: null,
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
       
      <Router>  
        <div className="App">
          <Navigationbar />
          { this.state.user ? ( <MainPage /> ) : ( <Login /> ) }
      </div>
      </Router>
     
    )
};
}

export default App;
