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
      { id: 9, name: "test"}, { id: 1, name: "Home"},
      { id: 2, name: "Car"},
      { id: 3, name: "OutSide"},
      { id: 4, name: "Emergency"},
      { id: 5, name: "Household"},
      { id: 6, name: "test" },
      { id: 7, name: "test"},
      { id: 8, name: "test"},
      { id: 9, name: "test"}, { id: 1, name: "Home"},
      { id: 2, name: "Car"},
      { id: 3, name: "OutSide"},
      { id: 4, name: "Emergency"},
      { id: 5, name: "Household"},
      { id: 6, name: "test" },
      { id: 7, name: "test"},
      { id: 8, name: "test"},
      { id: 9, name: "test"},
      { id: 10, name: "test"}
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