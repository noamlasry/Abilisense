import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./category.css";
class Category extends Component {
  state = {
    categories: [
      { id: 1, name: "Home"},
      { id: 2, name: "Car"},
      { id: 3, name: "OutSide"},
      { id: 4, name: "Emergency"},
      { id: 5, name: "Household"},
      { id: 6, name: "test" },
      { id: 7, name: "test"},
      { id: 8, name: "test"},
      { id: 9, name: "test"}, 
      { id: 11, name: "Home"},
      { id: 12, name: "Car"},
      { id: 13, name: "OutSide"},
      { id: 14, name: "Emergency"},
      { id: 15, name: "Household"},
      { id: 16, name: "test" },
      { id: 17, name: "test"},
      { id: 18, name: "test"},
      { id: 19, name: "test"}, 
      { id: 21, name: "Home"},
      { id: 22, name: "Car"},
      { id: 23, name: "OutSide"},
      { id: 24, name: "Emergency"},
      { id: 25, name: "Household"},
      { id: 26, name: "test" },
      { id: 27, name: "test"},
      { id: 28, name: "test"},
      { id: 29, name: "test"},
      { id: 30, name: "test"}
      ]
  };
    render() {
      const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };

          return (
            <div>
              <MDBContainer>
                <div className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
                <ol className="ol" >
                {this.state.categories.map(category =>
                  <li className="li" key={category.id}>
                    {category.name}
                  </li>)}
                </ol>
                </div>
              </MDBContainer>
            </div>
          );
        };
}

export default Category;