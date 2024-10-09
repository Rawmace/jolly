import React from "react";

const Weather = () => {
  let temperature = 20;
  if (temperature < 10) {
    return <h1>It's cold outside</h1>;
  } else if (temperature >= 10 && temperature < 25) {
    return <h1>It's nice outside</h1>;
  } else if (temperature >= 25) {
    return <h1>It's hot outside</h1>;
  } else {
    return <h1>Unable to determine weather</h1>;
  }
};

export default Weather;
