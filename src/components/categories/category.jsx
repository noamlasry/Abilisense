import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

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
      { id: 10, name: "test"}
      ]
  };
    render() {
          return (
            <div>
            <Table>
              <thead>
                <tr>
                  <th>Categories</th>
                </tr>
              </thead>
              <tbody>
                {this.state.categories.map(category =>
                  <tr key={category.id}>
                    <td>{category.name}</td>
                  </tr>)}
              </tbody>
            </Table>
            </div>
          );
        };
}

export default Category;