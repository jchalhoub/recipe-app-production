import Nutrients from "./Nutrients";
import React from "react";
import "./recipe.css";
//displays all of the recipes
import { Link } from "react-router-dom";

const Recipe = ({ items, API_KEY }) => {
  const handleClear = () => {
    items = [];
  };
  return (
    <div>
      <div className="recipe-container">
        <div className="recipe-container-sub">
          {console.log(items)}
          {console.log(items.results)}
          {console.log("items ^^")}

          {items &&
            items.length != 0 &&
            items.map((item) => {
              const { id, title, image, nutrition } = item;
              console.log("id " + id);

              if (nutrition) {
                //display component with nutrition facts if it exists
                const { nutrients } = nutrition;
                return (
                  // <div id={id} className="individual-recipe">
                  <Link to={{ pathname: `/recipe/${id}`, state: item }}>
                    <div id={id} className="card">
                      <img className="card-img-top" src={image} />
                      <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <Nutrients nut={nutrients} />
                      </div>
                    </div>
                  </Link>
                );
              }
              return (
                <Link to={{ pathname: `/recipe/${id}`, state: item }}>
                  <div id={id} className="card">
                    <img className="card-img-top" src={image} />
                    <div className="card-body">
                      <h6 className="card-title"> {title}</h6>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Recipe;
//   <div>
//   </div>;
