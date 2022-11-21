import React from "react";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span className={classes.info__mail}>5378082@mail.ru</span>
        <div className={classes.info__title}>
          <div className={classes["info__title--medium"]}>
            Коттеджный поселок класса <br /> De luxe
          </div>
          <span className={classes["info__title--bold"]}>«Усадьба Бергов»</span>
        </div>
        <div className={classes.info__description}>
          Мы строим этот поселок для тех, кто выбирает жизнь загородом, жизнь в
          гармонии с природой — реальным связующим между прошлым и будущим.
        </div>
        <div className={classes.footer}>
          <img
            className={classes.footer__img}
            src={require("../../../img/arrow.png")}
            alt="arrow"
          />
          <div className={classes.footer__text}>Смотреть проекты</div>
        </div>
      </div>
      <span className={classes.tel}>8 (495) 747-31-10</span>
    </div>
  );
};

export default Banner;
