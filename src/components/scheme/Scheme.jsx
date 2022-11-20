import React from "react";
import classes from "./Scheme.module.scss";

const Scheme = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.title}>
          Схема <span className={classes["title--bold"]}>проезда</span>
        </div>
        <div className={classes.description}>
          Коттеджный поселок класса De Luxe «Усадьба Бергов» располагается
          вблизи поселка Первомайское.
          <br />
          <br />
          Границами участка застройки служат: с севера — улица Парковая, с юга —
          река Десна и коттеджный поселок «Кедровое», с запада — ИЖС, с востока
          — ручей.
          <br />
          <br />
          Подъездная дорога ведет со стороны улицы Парковая поселка Первомайское
          с выездом на автотрассу «Москва- Киев».
        </div>
        <div className={classes.kilometrs}>
          <span className={classes.kilometrs__number}>23</span>
          <span className={classes.kilometrs__text}>км от Москвы</span>
        </div>
      </div>
      <div className={classes.map}></div>
    </div>
  );
};

export default Scheme;
