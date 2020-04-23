import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

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

const Cards1 = ({ state }) => {
  console.log(state);
  const url = "https://api.covid19india.org/data.json";
  const [results, setResults] = useState(" ");
  // const fetchData = async() => {
  //     try {
  //         const res = await axios.get(url);
  //         setResults(res.data.statewise);
  //         console.log(res.data.statewise);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // useEffect(() => {
  //     fetchData();
  // }, [])

  const stats = useStats();
  // console.log(stats);
  return (
    <div>
      <h1>Confirmed: {stats[0].confirmed}</h1>
      <h1>Recovered: {stats[0].recovered}</h1>
      <h1>Deaths: {stats[0].deaths}</h1>
    </div>
  );
};
export default Cards1;
