import axios from 'axios';

const today = () => {
  const weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  const date = weekday[new Date().getDay()];
  return date;
};
const weather = (component) => {
  let data;
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=kigali&APPID=baa9c286c4fa69c51bcf85107a7ac671';
  axios.get(url)
    .then((response) => {
      data = response.data;
      component.setState({ weatherInfo: response.data });
      return data;
    })
    .catch((err) => err);
  return data;
};
export { today, weather };
