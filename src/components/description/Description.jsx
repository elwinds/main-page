import React from "react";
import classes from "./Description.module.scss";

const Description = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        Мы строим этот поселок для тех, кто выбирает жизнь загородом, жизнь в
        гармонии с природой — реальным связующим между прошлым и будущим.
      </div>
      <span className={classes.projects}>Смотреть проекты</span>
    </div>
  );
};

export default Description;
