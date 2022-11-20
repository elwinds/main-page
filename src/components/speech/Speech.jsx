import React from "react";
import classes from "./Speech.module.scss";

const Speech = () => {
  return (
    <div id='partners' className={classes.container}>

        <img
          className={classes.logo}
          src={require("../../img/speech.png")}
          alt="logo"
        ></img>

      <div className={classes.text}>
        Разработчиком архитектурной концепции посёлка и Генеральным
        проектировщиком является одно из ведущих архитектурных бюро в России
        <span className={classes["text--bold"]}> SPEECH Чобан&Кузнецов</span>,
        во главе которого стоял Сергей Кузнецов, ныне Главный Архитектор г.
        Москвы.
      </div>
    </div>
  );
};

export default Speech;
