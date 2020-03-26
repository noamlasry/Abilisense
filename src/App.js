import React, { Component } from 'react';
import Login from "./components/login/login";
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import MainPage  from "./components/mainPage/mainPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar/NavigationBar';

class App extends Component{
    render(){
       return(
       
      <Router>  
        <div className="App">
          <NavigationBar />
         <Switch>
          <Route  exact path="/" component={ Login }/>
          <Route exact path="/mainPage" component={ MainPage }/>
         </Switch>
      </div>
      </Router>
     
    )
};
}

export default App;
