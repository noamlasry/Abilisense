import React, { Component } from "react";
import './rightNav.css';
import { Dropdown} from "react-bootstrap";



class RightNav extends Component {
    render(){
        return(

        <div className="rightnav">
           <h1 className="headline">Categories</h1>
         <Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="my-dropdown">
                 Home
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Household</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Kindergarten</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>

         <Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 Car
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
         
         <Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 OutSide
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
         <Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 Sub Categoties
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
         <Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 Emergency
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown><Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 Household
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown><Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 test
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown><Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 test
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown><Dropdown >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="drop">
                 test
              </Dropdown.Toggle>

            <Dropdown.Menu className="my-dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
        </div>
     )
 };
   
}

export default RightNav;