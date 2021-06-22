import React from "react";
import "./nutritionParam.css";

export default function NutritionParam(props) {
  return (
    <section className="recipe">
      {props.bool && (
        <div>
          <label>
            <input
              type="text"
              className="form-control"
              onChange={props.handleTextChange}
              placeholder={props.placeholder || "1 to 100g"}
            />
          </label>
          <button
            className="btn btn-dark"
            onClick={() => props.handleDisplay()}
          >
            Delete
          </button>
        </div>
      )}
      {!props.bool && (
        <button
          className="btn btn-light wide"
          onClick={() => props.handleDisplay()}
        >
          Display {props.name}
        </button>
      )}
    </section>
  );
}
