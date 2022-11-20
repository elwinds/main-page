import React from "react";
import classes from "./AboutFooter.module.scss";

const AboutFooter = () => {
  return (
    <div className={classes.container}>
      <div className={classes["item"]}>
        <span className={classes.text}>Площадь земельного участка</span>
        <div className={classes.value}>
          <span
            className={[classes.number, classes["number--square"]].join(" ")}
          >
            171 399
          </span>
          <span className={classes.meter}>
            m<sup>2</sup>
          </span>
        </div>
      </div>
      <div className={classes["item--development"]}>
        <span className={classes.text}>Общая застройка</span>
        <div className={classes.value}>
          <span
            className={[classes.number, classes["number--development"]].join(
              " "
            )}
          >
            24 460
          </span>
          <span className={classes.meter}>
            m<sup>2</sup>
          </span>
        </div>
      </div>
      <div className={classes["item--count"]}>
        <span className={classes.text}>Количество коттеджей</span>
        <span className={[classes.number, classes["number--count"]].join(" ")}>
          40
        </span>
      </div>
    </div>
  );
};

export default AboutFooter;
