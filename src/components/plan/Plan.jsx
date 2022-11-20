import React from "react";
import classes from "./Plan.module.scss";

const Plan = () => {
  return (
    <div id='plan' className={classes.container}>
      <div className={classes.text}>
        Ген. план <span className={classes["text--bold"]}>поселка</span>{" "}
      </div>
      <img
        className={classes.img}
        src={require("../../img/compass.png")}
        alt="compass"
      />
    </div>
  );
};

export default Plan;
<div className={classes.container}></div>;
