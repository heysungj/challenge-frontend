import "./HomePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [disableName, setDisableName] = useState(false);
  const [disableSweetness, setDisableSweetness] = useState(false);
  const [data, setData] = useState({
    name: "",
    level: 3,
    date: "",
  });
  // use navigate
  const navigate = useNavigate();

  function handleChange(e) {
    let newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    console.log(data);
  }

  // after click submit disbale the input
  function handleNameSubmit() {
    setDisableName(true);
  }

  // after selection submit disbale the select
  function handleSweetnessSubmit() {
    setDisableSweetness(true);
  }
  return (
    <div className="container">
      {/* put name  */}
      <div className="subContainer">
        <h4>Hello, please enter your name</h4>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          disabled={disableName}
          required
        />
        <button onClick={handleNameSubmit}>Submit</button>
      </div>
      {!disableName ? null : (
        <div className="subContainer">
          <h4>Hello {data.name}, please choose your preferred Sweetness</h4>
          <label>Sweetness </label>
          <select
            name="level"
            className="select"
            onChange={handleChange}
            disabled={disableSweetness}
            value={data.level}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={handleSweetnessSubmit}>Submit</button>
        </div>
      )}

      {!disableSweetness ? null : (
        <div className="subContainer">
          <h4>
            Hello {data.name}, you have chose preferred sweetness of{" "}
            {data.level}, please choose pick up date
          </h4>
          <label>Date </label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
            required
          />
          <button
            onClick={() => {
              navigate(`/result`, {
                state: {
                  data,
                },
              });
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
