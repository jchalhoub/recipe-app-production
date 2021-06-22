import Nutrients from "./Nutrients";
import React from "react";
import { Card } from "bootstrap/dist/css/bootstrap.min.css";

import "./recipe.css";
const Recipe = ({ items }) => {
  const handleClear = () => {
    items = [];
  };
  return (
    <div>
      <div className="recipe-container">
        <div className="recipe-container-sub">
          {console.log(items)}
          {items &&
            items.map((item) => {
              const { id, title, image, nutrition } = item;
              console.log("id " + id);

              if (nutrition) {
                //display component with nutrition facts if it exists
                const { nutrients } = nutrition;
                return (
                  // <div id={id} className="individual-recipe">
                  <div id={id} className="card">
                    <img className="card-img-top" src={image} />
                    <div className="card-body">
                      <h6 className="card-title"> {title}</h6>
                      <Nutrients nut={nutrients} />
                    </div>
                  </div>
                );
              }
              return (
                <div id={id} className="card">
                  <img className="card-img-top" src={image} />
                  <div className="card-body">
                    <h6 className="card-title"> {title}</h6>
                  </div>
                </div>
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
