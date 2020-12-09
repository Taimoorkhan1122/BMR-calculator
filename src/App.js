import "./App.css";

function App() {
  return (
    <div id="bmrcalc">
      <div className="form">
        <h2>BMR &amp; Daily Calorie Calculator</h2>
        <div className="inputwrap">
          <label className="label">Gender</label>
          <label>
            <input type="radio" className="genderF" name="gender" value="1" />
            Female
          </label>
          <label>
            <input type="radio" className="genderM" name="gender" value="2" />
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
          />
          <input
            type="number"
            name="heightInches"
            className="heightInches"
            min="0"
            max="11"
          />
        </div>
        <div className="inputwrap">
          <label className="label">Age in years</label>
          <input type="number" className="age" name="age" min="0" max="120" />
        </div>
        <button type="button">Calculate BMR</button>
        <div className="workout">
          <div className="inputwrap">
            <label className="label">Workout in a Week</label>
            <select className="activity" name="activity">
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
                Extremely Active (Very intense exercise, and physical job,
                exercise multiple times per day)
              </option>
            </select>
          </div>
          <button type="button">Calculate Calories</button>
        </div>
      </div>
    </div>
  );
}

export default App;
