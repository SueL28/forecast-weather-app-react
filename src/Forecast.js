import axios from "axios";
import React, {useState} from "react";
import ConvertTemperature from "./ConvertTemperature";
import "./Forecast.css"

export default function Forecast(props){
    const [forecast, setForecast] = useState("");
    const[searched, setSearched]= useState(false);
    let lat = props.lat;
    let long = props.long;
    let emoji = props.emoji;
    let emojiLink = `http://openweathermap.org/img/wn/${emoji}@2x.png`
    console.log(emoji)


    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getWeather(response){
        setForecast(response.data.daily)
        setSearched(true)
        console.log(forecast)

        
    }


    
    
    if (searched){
        
    return (
        <div className="Forecast">
          <div className="forecast-container">
            <h3 className="forecast-font">7 Day Forecast</h3>
    
            <hr />
    
            <div className="row">
              <div className="col-sm forecast-day-container">
                
                <span className="forecast-day">{days[(new Date(forecast[0].dt * 1000))]}</span>
    
                <div className="weather-status-font">{forecast[0].weather[0].description}</div>

                <div><img className="emoji-forecast" src={emojiLink} alt={forecast[0].weather[0].description}></img></div>
                <div className="forecast-high-number"><ConvertTemperature temp={Math.round(forecast[0].temp.max)}/></div>
                <div className="weather-status-font">HIGH</div>
                <div className="forecast-low-number"><ConvertTemperature temp={Math.round(forecast[0].temp.min)}/></div>
                <p className="weather-status-font">LOW</p>
              </div>
              
            </div>
          </div>
        </div>
      );
    } else {

        let apiKey = "a0ec055234934001bdc16c33f46f3ecb";
        let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        axios.get(forecastUrl).then(getWeather)

        return (
            <div className="Forecast">
                <h3 className="forecast-font">7 Day Forecast</h3>
    
                <hr />
            </div>
        );
    }
}