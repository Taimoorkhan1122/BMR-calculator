import React, { useState } from "react";
import { Activity } from "./Activity";
import "./App.css";

function App() {
  const [state, setState] = useState({
    unit: "metric",
    age: "",
    gender: "",
    weight: "",
    heightFeet: "",
    height: "",
    activity: "",
    bmr: "",
    calories: "",
    error: false,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // handling input changes according to event name
    switch (name) {
      case "unit":
        return setState({ ...state, unit: value });
      case "age":
        return setState({ ...state, age: value });
      case "gender":
        return setState({ ...state, gender: +value });
      case "weight":
        return setState({ ...state, weight: value });
      case "heightFeet":
        return setState({ ...state, heightFeet: value });
      case "height":
        return setState({ ...state, height: value });
      case "activity":
        return setState({ ...state, activity: value });
      default:
        return console.log("unhandled value");
    }
  };
  const calculateBMR = () => {
    if (
      state.age === "" ||
      state.weight === "" ||
      state.height === "" ||
      state.gender === ""
    ) {
      return setState({ ...state, error: true });
    }

    setState({ ...state, error: false });
    const age = state.age;
    const weight = state.weight;
    const height = state.height;
    // const age = state.age;

    let BMR_Male;
    let BMR_Female;

    if (state.unit === "imperial") {
      //imperial calculation
      BMR_Male = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      BMR_Female = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    } else {
      // metric calculation
      BMR_Male = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      BMR_Female = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    state.gender === 1
      ? setState({ ...state, bmr: BMR_Male })
      : setState({ ...state, bmr: BMR_Female });
  };
  return (
    <div id="bmrcalc">
      <div className="form">
        <h2>BMR &amp; Daily Calorie Calculator</h2>
        <h3>By Taimoor khan</h3>
        <div className="inputwrap">
          {state.error && <div className="error">All fields are required!</div>}
          <div className="unit_select">
            {/* select imperial or metric units */}
            <label className="unit">Select Unit</label>
            <label>
              <input
                type="radio"
                name="unit"
                value="imperial"
                c
                onChange={handleChange}
              />{" "}
              Imperial
            </label>
            <label>
              <input
                type="radio"
                name="unit"
                value="metric"
                checked={state.unit === "metric"}
                onChange={handleChange}
              />{" "}
              Metric
            </label>
          </div>

          {/* Gender Select  */}
          <label className="unit">Gender</label>
          <label>
            <input
              type="radio"
              className="genderF"
              name="gender"
              value="1"
              onChange={handleChange}
              checked={state.gender === 1}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              className="genderM"
              name="gender"
              value="2"
              onChange={handleChange}
              checked={state.gender === 2}
            />{" "}
            Male
          </label>
        </div>
        <div className="inputwrap">
          <label className="label">
            Weight in {state.unit === "metric" ? "Kg" : "pounds"}
          </label>
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
          <label className="label">
            Height in{" "}
            {state.unit === "metric" ? "feet and cm" : "feet and inches"}
          </label>
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
            name="height"
            className="height"
            min="0"
            max="11"
            onChange={handleChange}
            value={state.height}
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
        <button type="button" onClick={calculateBMR}>
          Calculate BMR
        </button>
        {state.bmr && (
          <>
            <div className="result">
              <h3>{state.bmr.toFixed(3)}</h3>
            </div>
            <Activity
              handleChange={handleChange}
              state={state}
              setState={setState}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
