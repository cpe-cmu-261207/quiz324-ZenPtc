import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [item, setItem] = useState({
    name: "",
    gender: "",
    age: ""
  });
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  useEffect(() => {
    localStorage.setItem("items", item);
  }, [item]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            value={name}
            onInput={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onSelect={() => setGender(this.handleSelect)}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 5"
            value={age}
            onInput={(e) => setAge(e.target.value)}
          ></input>
        </div>

        <button
          onClick={() => {
            console.log(name);
            console.log(gender);
            console.log(age);
          }}
          className="button is-danger is-fullwidth"
        >
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        <ItemTable name={name} gender={gender} age={age} />
        <p>Naruporn Powthongchin 620610794</p>
      </div>
    </div>
  );
}

export default App;
