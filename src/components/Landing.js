import React from "react";
import "../style/main.scss";
import about from "../assets/about.png";
const Landing = () => {
  return (
    <>
      <section className="about-us my-container">
        <div className="left-content">
          <h2 className="section-head">About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to
          </p>
        </div>
        <div className="right-content">
          <img src={about} alt="about us" className="img-fluid" />
        </div>
      </section>
    </>
  );
};

export default Landing;
