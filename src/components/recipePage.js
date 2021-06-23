import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./recipePage.css";

//how to pass API key as a prop?
const API_KEY = "af05afad0df44c5ba65ebdecb50697dc";

export default class recipePage extends Component {
  state = {
    activeRecipe: [],
  };
  //add a loading wheel
  //on component did mount call the API
  componentDidMount = async () => {
    const recipeName = this.props.location.state;
    let URL = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${this.props.location.state.id}`;
    const req = await fetch(URL);
    const res = await req.json();
    this.setState({ activeRecipe: res[0] });
    console.log(res[0]);

    console.log(typeof res[0].extendedIngredients);
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <h2 className="title"> {recipe.title}</h2>
        <div className="container recipe-indiv">
          <h3 className="center padded">{recipe.title}</h3>
          <img src={recipe.image} alt="no image" className="center padded" />
          <div className="grid">
            <div className="grid-left margined padded">
              <h4> Ingredients</h4>
              <ul>
                {recipe.extendedIngredients &&
                  recipe.extendedIngredients.map((item) => {
                    return (
                      <div>
                        <li>{item.original}</li>
                      </div>
                    );
                  })}
              </ul>
            </div>
            {recipe.analyzedInstructions && recipe.analyzedInstructions[0] &&           
             <div className="grid-right margined padded">
              <h4> Instructions</h4>
              <ol>
                { 
                  recipe.analyzedInstructions[0].steps.map((step) => {
                    return (
                      <div>
                        <li>{step.step}</li>
                      </div>
                    );
                  })}
              </ol>
            </div>}
          </div>
          <button className="btn btn-warning">
            <Link to="/">Go Home</Link>
          </button>
          <p>
            Website:
            <span>
              <a href={recipe.spoonacularSourceUrl}>Spoonacular Full Recipe</a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
