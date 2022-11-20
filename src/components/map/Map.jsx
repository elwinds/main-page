import React from 'react';
import classes from './Map.module.scss';

const Map = () => {
    return (
      <div className={classes.container}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A04b63bbbca870c43463d55bccbd7f535666bca8e3da9a1526be86a142970655a&amp;source=constructor"
          width="100%"
          height="428"
          frameBorder="0"
          title='fd'
        ></iframe>
      </div>
    );
}
 
export default Map;