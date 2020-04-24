import React from "react";
import "../../App.css";
import image1 from "../../Images/image1.jpg";

export const Content1 = () => {
  return (
    <section className="content d-flex align-items-center overlay">
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <div>
              <img
                src={image1}
                alt="showcase"
                className="img-fluid"
                id="landing-image"
              />
            </div>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-center ">
            <div className="showcase-content">
              <p className="display-4 title">World is suffering</p>
              <p className="text-center">
                Dont'get Panic Check statisctics here
              </p>
              <p className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-primary center"
                >
                  Indian-statistics
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
