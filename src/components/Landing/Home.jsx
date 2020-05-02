import React from "react";
import firstImage from "../../Images/Untitled-26.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="home" id="Home">
        <div className="container home-container">
          <div className="row">
            <div className="col-8 d-flex align-items-center">
              <div className="home-text">
                <h1 className=" pr-auto">CORONA</h1>
                <br />
                <h4 className=" pr-auto">Virus Disease (COVID-19)</h4>
                <br />

                <p className="lead  pr-auto">
                  COVID-19 is a new illness that can affect our lungs and
                  airways. It is caused by a virus called the corona virus. The
                  illness first started in Wuhan, Hubei, China. Common signs of
                  the infection include respiratory symtpoms, fever, cough,
                  shortness of breath and breathing difficulty.{" "}
                </p>
                <br />
              </div>
            </div>

            <div className="col-4 d-flex align-items-center">
              <img
                src={firstImage}
                alt="First"
                className="img-fluid home-image pl-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr />
      <br />
    </div>
  );
};

export default Home;
