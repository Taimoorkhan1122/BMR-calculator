import React, { useState } from "react";
import { Activity } from "./Activity";
import "./App.css";

function App() {
  const [state, setState] = useState({
    age: "",
    gender: "",
    weight: "",
    heightFeet: "",
    heightInches: "",
    activity: "",
    bmr: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // handling input changes according to event name
    switch (name) {
      case "age":
        return setState({ ...state, age: value });
      case "gender":
        return setState({ ...state, gender: value });
      case "weight":
        return setState({ ...state, weight: value });
      case "heightFeet":
        return setState({ ...state, heightFeet: value });
      case "heightInches":
        return setState({ ...state, heightInches: value });
      case "activity":
        return setState({ ...state, activity: value });
      default:
        return console.log("unhandled value");
    }
  };
  return (
    <div id="bmrcalc">
      <div className="form">
        <h2>BMR &amp; Daily Calorie Calculator</h2>
        <div className="inputwrap">
          <label className="label">Gender</label>
          <label>
            <input
              type="radio"
              className="genderF"
              name="gender"
              value="1"
              onChange={handleChange}
              checked={state.gender === "1"}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              className="genderM"
              name="gender"
              value="2"
              onChange={handleChange}
              checked={state.gender === "2"}
            />
            Male
          </label>
        </div>
        <div className="inputwrap">
          <label className="label">Weight in Pounds</label>
          <input
            type="number"
            name="weight"
            className="weight"
            min="0"
            max="999"
            onChange={handleChange}
            value={state.weight}
          />
        </div>
        <div className="inputwrap">
          <label className="label">Height in feet and inches</label>
          <input
            type="number"
            name="heightFeet"
            className="heightFeet"
            min="0"
            max="8"
            onChange={handleChange}
            value={state.heightFeet}
          />
          <input
            type="number"
            name="heightInches"
            className="heightInches"
            min="0"
            max="11"
            onChange={handleChange}
            value={state.heightInches}
          />
        </div>
        <div className="inputwrap">
          <label className="label">Age in years</label>
          <input
            type="number"
            className="age"
            name="age"
            min="0"
            max="120"
            onChange={handleChange}
            value={state.age}
          />
        </div>
        <button type="button">Calculate BMR</button>
        <Activity handleChange={handleChange} state={state} />
      </div>
    </div>
  );
}

export default App;
