import React from "react";
import AboutFooter from "./about-footer/AboutFooter";
import classes from "./About.module.scss";

const About = () => {
  return (
    <>
      <div id="about" className={classes.container}>
        <div className={classes.info}>
          <div className={classes.info__title}>
            О <span className={classes['info__title--bold']}>поселке</span>
          </div>
          <div className={classes.info__text}>
            Основными элементами планировки участков стали уникальные природные
            условия, ландшафт территории, используемой под застройку.
            Основополагающий фактор застройки северной части, на которой
            расположен лесной массив, — сохранение максимального количества
            вековых деревьев. В застройке и планировке участков средней части
            активно используется и сохраняется природный ландшафт и рельеф, что
            позволяет добиться уникальных видовых характеристик. В южной части
            участки примыкают к реке, вдоль которой устраивается набережная.
          </div>
          <div className={classes.info__more}>
            Больше о поселке
            <img
              className={classes.arrow}
              src={require("../../img/green-arrow.png")}
              alt="arrow"
            />
          </div>
        </div>
        <img
          className={classes.img}
          src={require("../../img/about.png")}
          alt="house"
        />
      </div>
      <AboutFooter />
    </>
  );
};

export default About;
