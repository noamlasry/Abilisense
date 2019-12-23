import React, { Component } from 'react';
import Login from "./components/login";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage  from "./components/mainPage";

class App extends Component{
    render(){
       return(
      <Router>  
        <div className="App">
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
