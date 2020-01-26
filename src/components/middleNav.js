import React, { Component } from "react";
import './middleNav.css';
import Player from "./player";
import {Col, Row, Form} from "react-bootstrap";
import { Button} from 'react-bootstrap';

class MiddleNav extends Component {
    render(){
      
      return(
        <div className="middlenav">
            <h1 className="label">Audio Editor</h1>
            <Player />
            <Form className="form" onSubmit={this.handleSubmit}>
              <Form.Group as={Row} className="formGroup" controlId="cropFrom" >
                <Form.Label className="label" column sm={5}>Crop From:</Form.Label>
                <Col  sm={4}>
                <Form.Control className="formControl"
                  autoFocus
                  type="cropFrom"
                  placeholder="00:00"
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row}className="formGroup" controlId="cropTo" >
              <Form.Label className="label" column sm={5}>Crop To:</Form.Label>
              <Col sm={4}>
                <Form.Control className="formControl"
                  type="cropTo"
                  placeholder="00:00"
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="formGroup" controlId="category" >
              <Form.Label className="label" column sm={5}>Category:</Form.Label>
              <Col sm={5}>
                <Form.Control className="formControl"
                  type="category"
                  placeholder="category"
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="formGroup" controlId="sub-category" >
              <Form.Label className="label" column sm={5}>Sub-Category:</Form.Label>
              <Col sm={5}>
                <Form.Control className="formControl"
                  type="sub-category"
                  placeholder="sub-category"
                />
                </Col>
              </Form.Group>
              <Button variant="outline-primary" className="btn-light">Submit</Button>
              <Button variant="outline-primary" className="btn-light">Delete track</Button>
                
            </Form>
        </div>
      )
 };
 
}

export default MiddleNav;