class Weather{
  constructor(city, country){
    this.apiKey = 'c049d48a77mshe09ca2d6f1194cfp1c6e54jsnc7f75bb367e7';
    this.city = city;
    this.country = country;
  }

  async getWeather(){
    const response = await fetch(`
      https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${this.city},${this.country}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": `${this.apiKey}`
      }
    });

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}