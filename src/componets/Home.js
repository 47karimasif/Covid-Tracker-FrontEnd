import React from "react";
import "../App.css";

const Home = () => {
  return (
    <section className="showcase d-flex align-items-center">
      <div className="row">
        <div className="col-sm-12 col-md-8 d-flex align-items-center">
          <div>
            <h1 className="text-center">
              <span className="title display-3">Covid-19</span>
            </h1>
            <p className="text-center">
              <span className="h5 text-center quote">
                Stay at home in quarantine
              </span>
            </p>
            <p className="gray-text px-5">
              Covid-19 is a contagious respiratory disease caused by the
              coronavirus. It can cause mild to severe illness and sometimes
              lead to death.
            </p>
          </div>
        </div>
        <div className="d-none d-md-block col-md-4">
          <img
            src="https://drive.google.com/uc?id=1-zYyyWLBDS1qVkuSAgUVeTA6nSLSCyEU"
            alt="showcase"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
