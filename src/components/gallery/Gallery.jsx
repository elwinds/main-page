import React from "react";
import classes from "./Gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

  return (
    <div id='gallery' className={classes.container}>
      <Swiper
        slidesPerView={3}
        effect={"flip"}
        flipEffect={{ slideShadows: true, limitRotation: true }}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation]}
        className={classes.swiper}
      >
        <SwiperSlide>
          <img
            className={classes.img}
            src={require("../../img/gallery/1.png")}
            alt="view"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={classes.img}
            src={require("../../img/gallery/2.png")}
            alt="view"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={classes.img}
            src={require("../../img/gallery/3.png")}
            alt="view"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={classes.img}
            src={require("../../img/gallery/4.png")}
            alt="view"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={classes.img}
            src={require("../../img/gallery/5.png")}
            alt="view"
          />
        </SwiperSlide>
      </Swiper>
      <div ref={navigationPrevRef}>
        <img
          className={[classes.arrow, classes["arrow--back"]].join(" ")}
          src={require("../../img/arrow-back.png")}
          alt="view"
        />
      </div>
      <div ref={navigationNextRef}>
        <img
          className={[classes.arrow, classes["arrow--next"]].join(" ")}
          src={require("../../img/arrow.png")}
          alt="view"
        />
      </div>
    </div>
  );
};

export default Gallery;
