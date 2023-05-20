import React from "react";
import "../style/main.scss";
import about from "../assets/about.png";
import card from "../assets/card.png";
import block from "../assets/expblock.png";
import expback from "../assets/expertiseBack.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Landing = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      {/* About Us Section */}

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

      {/* Expertise Section */}

      <section className="expertise">
        <h2 className="section-head">Expertise</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>

        <div className="expertiese-content">
          <div className="expertise-card">
            <img src={card} alt="card" />
            <div className="card-content">
              <h4>Innovation</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="expertise-card">
            <img src={card} alt="card" />
            <div className="card-content">
              <h4>Innovation</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="expertise-card">
            <img src={card} alt="card" />
            <div className="card-content">
              <h4>Innovation</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="exp-back">
          <img src={expback} alt="back img" className="" />
        </div>
      </section>
    </>
  );
};

export default Landing;
