import React, { Component } from 'react';
import Login from "./components/login";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage  from "./components/MainPage";
import MainNav from './components/mainNav';

class App extends Component{
    render(){
       return(
      <Router>  
        <div className="App">
          <MainNav />
         <switch>
          <Route  exact path="/" component={ Login }/>
          <Route exact path="/mainPage" component={ MainPage }/>
         </switch>
      </div>
      </Router>
    )
};
}

export default App;
