import React, { Component } from "react";
import categoriesData from "../Data/Categories.json";

class CategorieList extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    this.setState({
      categories: categoriesData,
    });
  }
  render() {
    let categoriesList = this.state.categories.map((categorie) => {
      return <h2>{categorie.title}</h2>;
    });

    return (
      <div>
        <h1>Categories</h1>
        {categoriesList}
      </div>
    );
  }
}

export default CategorieList;
