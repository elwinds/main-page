import React from "react";
import classes from "./Gallery.module.scss";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Gallery = () => {
  const slickSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    edgeFriction: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="gallery" className={classes.container}>
      <div className={classes.shadowleft}></div>
      <div className={classes.shadowright}></div>
      <Slider {...slickSettings}>
        <img
          className={classes.img}
          src={require("../../img/gallery/33.png")}
          alt="view"
        />
        <img
          className={classes.img}
          src={require("../../img/gallery/44.png")}
          alt="view"
        />
        <img
          className={classes.img}
          src={require("../../img/gallery/55.png")}
          alt="view"
        />
        <img
          className={classes.img}
          src={require("../../img/gallery/11.png")}
          alt="view"
        />
        <img
          className={classes.img}
          src={require("../../img/gallery/22.png")}
          alt="view"
        />
      </Slider>
    </div>
  );
};

export default Gallery;
