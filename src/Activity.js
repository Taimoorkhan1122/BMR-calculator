import React from "react";

export const Activity = ({ handleChange, state, setState }) => {
  const calculateCalories = () => {
    const bmr = state.bmr;
    const activity = state.activity;
    setState({ ...state, calories: bmr * activity });
  };
  return (
    <div className="workout">
      <div className="inputwrap">
        <label className="label">Workout in a Week</label>
        <select
          className="activity"
          name="activity"
          onChange={handleChange}
          value={state.activity}>
          <option value="">Select your Activity</option>
          <option value="1.2">
            Sedentary (Very little or no exercise, and desk job)
          </option>
          <option value="1.375">
            Lightly Active (Light exercise 1 to 3 days per week)
          </option>
          <option value="1.55">
            Moderately Active (Moderate exercise 3 to 5 days per week)
          </option>
          <option value="1.725">
            Very Active (Heavy exercise 6 to 7 days per week)
          </option>
          <option value="1.9">
            Extremely Active (Very intense exercise, and physical job, exercise
            multiple times per day)
          </option>
        </select>
      </div>
      <button type="button" onClick={calculateCalories}>
        Calculate Calories
      </button>
      {state.calories && (
        <div className="result">
          <h3>
            Daily kilocalories needed {state.calories.toFixed(2)} KCal/day
          </h3>
        </div>
      )}
    </div>
  );
};
