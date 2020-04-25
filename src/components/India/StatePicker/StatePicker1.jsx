import React, { useState, useEffect } from "react";
import Cards1 from "../Cards/Cards1";
import Charts from "../Charts/Charts";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./StatePicker.module.css";

import axios from "axios";

const useStats = () => {
  const [results, setResults] = useState(" ");
  const url = "https://api.covid19india.org/data.json";
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(url);
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
      <Cards1 state={selectedState} />
      {/* <select onChange={(e) => {setSelectedState(e.target.value)}}>
            {console.log(selectedState)}
            {Object.entries(states).map((
            [state , statecode],index) => 
            { 
                return(
                <option selected={selectedState === statecode.state} key={statecode.state} value={statecode.state}>
                    {statecode.state}
                </option>);
                
            })}
            
            </select> */}

      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(event) => setSelectedState(event.target.value)}
        >
          {Object.entries(states).map(([state, statecode], index) => {
            return (
              <option
                defaultValue="Total"
                selected={selectedState === statecode.state}
                key={statecode.state}
                value={statecode.state}
              >
                {statecode.state}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      <div className="row justify-content-center">
        <div className="col-10 col-md-8">
          <p className="text-center ">
            <span className="mr-3 state text-danger">
              select your state to check current statistics
            </span>
          </p>
        </div>
      </div>
      <Charts state={selectedState} />
    </div>
  );
};

export default StatePicker1;
