const getWeather = (component, city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=baa9c286c4fa69c51bcf85107a7ac671`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log('response', response);
      component.setState({ details: response });
    })
    .catch((err) => console.log(err));
};
const getForecast = (component, city) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=baa9c286c4fa69c51bcf85107a7ac671`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log('response', response);
      component.setState({ forecastDetails: response });
    })
    .catch((err) => console.log(err));
}
export { getWeather, getForecast };
