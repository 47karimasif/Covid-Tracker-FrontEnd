import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = () => {
  const [utC, setUtC] = useState("Gujarat");
  const [ut, setUt] = useState("");
  const [results, setResults] = useState(" ");
  const [time, setTime] = useState(" ");
  const url = "https://api.rootnet.in/covid19-in/stats/latest";
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setTime(res.data);
      setUt(res.data.data.regional);
      setUtC(ut.loc);
      setResults(res.data.data.summary);
      console.log(utC);
      console.log(ut.totalConfirmed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {!utC ? results.total : ut.totalConfirmed}
            </Typography>
            <Typography color="textSecondary">
              {new Date(time.lastRefreshed).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">{results.discharged}</Typography>
            <Typography color="textSecondary">
              {new Date(time.lastRefreshed).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{results.deaths}</Typography>
            <Typography color="textSecondary">
              {new Date(time.lastRefreshed).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
