import React, { Fragment } from "react";
import "../App.css";
import landing from "./../Images/landing.jpg";
import Content1 from "../componets/Home/Content1";

const Home = () => {
  return (
    <Fragment>
      <section className="showcase d-flex align-items-center overlay">
        <div className="container">
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
                  src={landing}
                  alt="showcase"
                  className="img-fluid"
                  id="landing-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content1 />
    </Fragment>
  );
};

export default Home;
