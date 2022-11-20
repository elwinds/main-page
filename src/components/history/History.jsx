import React from "react";
import classes from "./History.module.scss";

const History = () => {
  return (
    <div id="history" className={classes.container}>
      <div className={classes.img}></div>
      <div className={classes.info}>
        <div className={classes.info__title}>
          Единство природы и истории — основа концепции коттеджного поселка
          <br />
          <span className={classes["info__title--bold"]}>«Усадьба Бергов»</span>
        </div>
        <div className={classes.info__description}>
          Традиционная русская усадьба - богатейший пласт отечественного
          культурного наследия, гармоничный организм, где природа и архитектура
          сочетаются с поэзией загородной жизни, ее экологической
          целесообразностью.
          <br />
          <br />С русской усадьбой неразрывно связаны имена многих
          государственных деятелей и военачальников, писателей, художников -
          тех, кто составлял веками славу России.
        </div>
        <div className={classes.info__more}>
          Об истории усадьбы
          <img
            className={classes.arrow}
            src={require("../../img/green-arrow.png")}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
