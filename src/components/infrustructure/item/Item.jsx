import React from "react";
import classes from "./Item.module.scss";

const Item = (props) => {
  const { img, text } = props;

  const path = "../../../img/gas.png";

  return (
    <div className={classes.container}>
      {img}
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default Item;
