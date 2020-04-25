import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

const WorlMap = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://corona.lmao.ninja/v2/countries");
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
    <section id="map" className="my-5">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCLhCK1eL0sq9nVpLyhsOM3e6xExwfthho" }}
          defaultCenter={{ lat: 22, lng: 77 }}
          defaultZoom={3}
        >
          {results.map((data) => {
            return (
              <div
                key={data.country}
                lat={data.countryInfo.lat}
                lng={data.countryInfo.long}
              >
                <span className="text-white bg-dark">{data.cases}</span>
              </div>
            );
          })}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default WorlMap;
