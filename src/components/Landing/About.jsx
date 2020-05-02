import React from "react";
import secondImage from "../../Images/virus-img.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about" id="About">
        <div className="container about-container">
          <div className="row">
            <div className="col-4 d-flex align-items-center">
              <img
                src={secondImage}
                alt="Virus"
                className="about-image img-fluid"
              />
            </div>
            <div className="col-8 d-flex align-items-center">
              <div className="about-text">
                <h1 className=" pr-auto text-center">About</h1>
                <br />
                <p className="  pr-auto">
                  The disease caused by the novel coronavirus first identified
                  in Wuhan, China, has been named coronavirus disease 2019
                  (COVID-19) – ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’
                  for disease. Formerly, this disease was referred to as ‘2019
                  novel coronavirus’ or ‘2019-nCoV.’ The COVID-19 virus is a new
                  virus linked to the same family of viruses as Severe Acute
                  Respiratory Syndrome (SARS) and some types of common cold. As
                  of April 25, 2020, over 2.5 million people have contracted the
                  virus worldwide, and it has caused over 170,000 deaths.
                </p>
                <br />
              </div>
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

export default About;
