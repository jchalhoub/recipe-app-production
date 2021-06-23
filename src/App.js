import React, { useState, useEffect } from "react";
// npm i --save react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./components/recipe";
import NutritionParam from "./components/NutritionParam";
import "./App.css";

function App() {
  //Methods
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  const API_KEY = "af05afad0df44c5ba65ebdecb50697dc";

  const [query, setQuery] = useState("");
  //1
  const [minProtein, setMinProtein] = useState("");
  //100
  const [maxCarbs, setMaxCarbs] = useState("");
  //100
  const [maxFat, setMaxFat] = useState("");
  //100
  const [number, setNumber] = useState("");
  //800
  const [maxCalories, setMaxCalories] = useState("");
  //display variables booleans
  const [isProtein, setIsProtein] = useState(false);
  const [isCarb, setIsCarb] = useState(false);
  const [isFat, setIsFat] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isCalories, setIsCalories] = useState(false);
  const oneHundred = range(0, 100); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const [results, setResults] = useState([]);
  let URL =
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${query}` +
    minProtein +
    maxCarbs +
    maxCalories +
    maxFat +
    number;

  async function getData() {
    const response = await fetch(URL);
    const data = await response.json();
    await setResults(data.results);
    console.log(data);
    console.log("data logged ^");
    await localStorage.setItem("results", JSON.stringify(data));
  }
  function clearData() {
    console.log(results);
    setResults([]);
    localStorage.clear();
    console.log(results);
  }
  function displayProtein() {
    setIsProtein(!isProtein);
    setMinProtein("");
  }
  function displayCarb() {
    setIsCarb(!isCarb);
    setMaxCarbs("");
  }
  function displayFat() {
    setIsFat(!isFat);
    setMaxFat("");
  }
  function displayNumber() {
    setIsNumber(!isNumber);
    setNumber("");
  }
  function displayCal() {
    setIsCalories(!isCalories);
    setMaxCalories("");
  }

  function handleChange(e) {
    setQuery("query=" + e.target.value);
    console.log(query);
  }

  //pass the set function,e, and the & tag and make a parent function for this
  function handleProteinChange(e) {
    let temp = e.target.value;
    setMinProtein("&minProtein=" + temp);
    console.log(query);
  }
  function handleCarbChange(e) {
    let temp = e.target.value;
    setMaxCarbs("&maxCarbs=" + temp);
    console.log(query);
  }
  function handleFatChange(e) {
    let temp = e.target.value;
    setMaxFat("&maxFat=" + temp);
    console.log(query);
  }
  function handleNumberChange(e) {
    let temp = e.target.value;
    setNumber("&number=" + temp);
    console.log(query);
  }
  function handleCalChange(e) {
    let temp = e.target.value;
    setMaxCalories("&minCalories=" + temp);
    console.log(query);
  }
  useEffect(() => {
    localStorage.getItem("results") &&
      setResults(JSON.parse(localStorage.getItem("results")).results);
  }, []);
  return (
    <div>
      <h1 className="center title">Recipe App </h1>
      <div className="form-wrapper">
        <section className="center">
          <label>
            <input
              className="form-control recipe-search"
              type="text"
              onChange={handleChange}
              placeholder="Recipe Name"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  getData();
                }
              }}
            />
          </label>
        </section>
        {/* //protein section copy */}
        <div className="center">
          <NutritionParam
            name="Min Protein"
            bool={isProtein}
            setBool={setIsProtein}
            handleTextChange={handleProteinChange}
            handleDisplay={displayProtein}
          />
        </div>
        {/* Carb section */}
        <div className="center">
          <NutritionParam
            name="Max Carbs"
            bool={isCarb}
            setBool={setIsCarb}
            handleTextChange={handleCarbChange}
            handleDisplay={displayCarb}
          />
        </div>
        <div className="center">
          {/* //fat section */}
          <NutritionParam
            name="Max Fat"
            bool={isFat}
            setBool={setIsFat}
            handleTextChange={handleFatChange}
            handleDisplay={displayFat}
          />
        </div>
        {/* calorie section */}
        <div className="center">
          <NutritionParam
            name="Max Calories"
            bool={isCalories}
            setBool={setIsCalories}
            handleTextChange={handleCalChange}
            handleDisplay={displayCal}
            placeholder={"50 to 800kcal"}
          />
          {/* shows number of results */}
        </div>
        <div className="center">
          <NutritionParam
            name="Number"
            bool={isNumber}
            setBool={setIsNumber}
            handleTextChange={handleNumberChange}
            handleDisplay={displayNumber}
            placeholder={"1 to 100"}
          />
        </div>

        <button onClick={() => getData()} className="btn btn-success center">
          Get Recipes
        </button>
      </div>
      <br />
      {results && results.length != 0 && (
        <button onClick={() => clearData()} className="center btn btn-danger">
          Reset
        </button>
      )}
      {results && <Recipe items={results} API_KEY={API_KEY} />}
    </div>
  );
}

export default App;
