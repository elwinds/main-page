import React from "react";
import classes from "./Infrastructure.module.scss";
import Item from "./item/Item";

const Infrustructure = () => {
  const [activeTab, setActiveTab] = React.useState("Inside");

  return (
    <div id="infrustructure" className={classes.container}>
      <div className={classes.title}>Инфраструктура</div>
      <div className={classes.box}>
        <div className={classes.tabs}>
          <div
            className={
              activeTab === "Inside"
                ? [classes.btnTab, classes["btnTab--active"]].join(" ")
                : classes.btnTab
            }
            onClick={() => setActiveTab("Inside")}
          >
            Внутри
          </div>
          <div
            className={
              activeTab === "Beside"
                ? [classes.btnTab, classes["btnTab--active"]].join(" ")
                : classes.btnTab
            }
            onClick={() => setActiveTab("Beside")}
          >
            Рядом
          </div>
        </div>
        {activeTab === "Inside" ? (
          <div className={classes.items}>
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/gas.png")}
                  alt="gas"
                ></img>
              }
              text="Газ"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/light.png")}
                  alt="gas"
                ></img>
              }
              text="Электричество"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/water.png")}
                  alt="gas"
                ></img>
              }
              text="Водопровод"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/canalization.png")}
                  alt="gas"
                ></img>
              }
              text="Канализация"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/improvement.png")}
                  alt="gas"
                ></img>
              }
              text="Благоустройство"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/internet.png")}
                  alt="gas"
                ></img>
              }
              text="Интернет"
            />
          </div>
        ) : (
          <div className={classes.items}>
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/gas.png")}
                  alt="gas"
                ></img>
              }
              text="some"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/light.png")}
                  alt="gas"
                ></img>
              }
              text="other"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/water.png")}
                  alt="gas"
                ></img>
              }
              text="item"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/canalization.png")}
                  alt="gas"
                ></img>
              }
              text="some"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/improvement.png")}
                  alt="gas"
                ></img>
              }
              text="other"
            />
            <Item
              img={
                <img
                  className={classes.img}
                  src={require("../../img/internet.png")}
                  alt="gas"
                ></img>
              }
              text="item"
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default Infrustructure;
