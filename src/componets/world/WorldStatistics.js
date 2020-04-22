import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
const WorldStatistics = () => {
  const [results, setResults] = useState(" ");
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://corona.lmao.ninja/v2/all");
      setResults(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const date = new Date(parseInt(results.updated));
  if (loading) {
    return (
      <div className="row mt-5">
        <div className="col-12">
          <p className="text-center">Loading....</p>
        </div>
      </div>
    );
  }
  return (
    <section id="world-statistics" className="mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <p className="h2">Global Covid Statistics</p>
          <p>
            LastUpdated : <Moment format={"YYYY-MM-DD HH:mm"}>{date}</Moment>
          </p>
        </div>
      </div>
      <div className="row pt-3">
        {/* cases */}
        <div className="col-4 ">
          <p>TotalCases : {results.cases}</p>
          <p>TodayCases : {results.todayCases}</p>
        </div>
        {/* deaths */}
        <div className="col-4 ">
          <p>TotalDeaths : {results.deaths}</p>
          <p>Todaydeaths : {results.todayDeaths}</p>
        </div>
        {/* recovered */}
        <div className="col-4 ">
          <p>TotalRecovered : {results.recovered}</p>
          <p>Criticals : {results.critical}</p>
        </div>
      </div>
    </section>
  );
};

export default WorldStatistics;
