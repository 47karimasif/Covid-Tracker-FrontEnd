import React, { useState, useEffect } from "react";

import axios from "axios";
import Cards1 from "../india/Cards1";

const useStats = () => {
  const [results, setResults] = useState(" ");
  const url = "https://api.covid19india.org/data.json";
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(url);
      console.log(data.data);
      setResults(data.data.statewise);
    }
    fetchData();
  }, []);
  return results;
};

const StatePicker1 = () => {
  const [selectedState, setSelectedState] = useState();
  const states = useStats();
  if (!states) return <p>Loading...</p>;
  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedState(e.target.value);
        }}
      >
        {Object.entries(states).map(([state, statecode]) => {
          return (
            <option key={statecode.state} value={statecode.state}>
              {statecode.state}
            </option>
          );
        })}
      </select>
      <Cards1 state={selectedState} />
    </div>
  );
};

export default StatePicker1;
