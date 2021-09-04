import axios from "axios";
import React, {useState} from "react";

import "./Forecast.css"
import ForecastDay from "./ForecastDay";

export default function Forecast(props){
    const [forecast, setForecast] = useState("");
    const[searched, setSearched]= useState(false);
    let lat = props.lat;
    let long = props.long;
    


    function getWeather(response){
  
        setForecast(response.data.daily)
        setSearched(true)
   

        
    }


    
    
    if (searched){
        
    return (
        <div className="Forecast">
          <div className="forecast-container">
            <h3 className="forecast-font">7 Day Forecast</h3>
    
            <hr />
    
              <div className="container">
                <div className="row forecast-grid">
                {forecast.map(function(dailyForecast, index){  //MAP IS A LOOP
                  if (index <6){

                    return (
                  
                      <div className="col-sm" key={index}>
                      <ForecastDay data={dailyForecast} />
                      </div>
                    
                    );
                  }
                })}
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