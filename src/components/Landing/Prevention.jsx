import React from "react";
import fourthImage from "../../Images/prevention.png";

const Prevention = () => {
  return (
    <div>
      <section className="prevention" id="Preventions">
        <div className="container symptoms-container">
          <div className="row">
            <div className="col-4 d-flex align-items-center">
              <img
                src={fourthImage}
                alt="Virus"
                className="about-image img-fluid"
              />
            </div>

            <div className="col-8 d-flex align-items-center">
              <div className="about-text">
                <h1 className=" pr-auto text-center">Preventions</h1>
                <br />
                <ul className="mt-3 mx-3">
                  <li>
                    {" "}
                    <b>Clean your hands often.</b> Use soap and water, or an
                    alcohol-based hand rub.
                  </li>
                  <li>
                    <b>Maintain a safe distance</b> from anyone who is coughing
                    or sneezing.{" "}
                  </li>
                  <li>
                    <b>Don’t touch your eyes,</b> nose or mouth.
                  </li>
                  <li>
                    <b>Cover your nose and mouth</b> with your bent elbow or a
                    tissue when you cough or sneeze.
                  </li>
                  <li>
                    <b>Stay home</b> if you feel unwell.
                  </li>
                  <li>
                    {" "}
                    <b>Call the helpline</b> if you have a fever, a cough, and
                    difficulty breathing, seek medical attention.
                  </li>
                  <li>
                    {" "}
                    <b>Follow the directions</b> of your local health authority.
                  </li>
                </ul>

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

export default Prevention;
