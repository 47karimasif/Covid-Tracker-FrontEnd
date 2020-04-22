import React from "react";
import "../App.css";

const Home = () => {
  return (
    <section className="showcase d-flex align-items-center">
      <div className="row">
        <div className="col-8 d-flex align-items-center">
          <div className="showcase-content">
            <h1 className="text-center">
              <span className="title display-3">Covid-19</span>
            </h1>
            <p className="text-center">
              <span className="quote h5">Stay at home in quarantine</span>
            </p>
            <p className="gray-text px-5 tagline">
              Covid-19 is a contagious respiratory disease caused by the
              coronavirus.
            </p>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <div>
            <img
              src="https://drive.google.com/uc?id=1-zYyyWLBDS1qVkuSAgUVeTA6nSLSCyEU"
              alt="showcase"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
