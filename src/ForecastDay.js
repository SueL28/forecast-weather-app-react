import React from "react";
import ConvertTemperature from "./ConvertTemperature";

export default function ForecastDay(props){
    console.log(props)

    let emoji = props.emoji;
    let emojiLink = `http://openweathermap.org/img/wn/${emoji}@2x.png`
    
   /* function date(){
        let date = new Date(props.data.dt * 1000);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = date.getDay();
        let writtenDay = days[day]

        return writtenDay;
    } */


    return(
        
        <div className="col-sm">

            <span className="forecast-day">DATE</span>
                
                <div className="weather-status-font">DESCRIP</div>
                <div>😀</div>
                {/*<div><img className="emoji-forecast" src={emojiLink} alt={props.data.weather[0].description}></img></div> 
                <div className="forecast-high-number"><ConvertTemperature temp={Math.round(props.data.temp.max)}/></div>
                <div className="weather-status-font">HIGH</div>
                <div className="forecast-low-number"><ConvertTemperature temp={Math.round(props.data.temp.min)}/></div>*/}
                <p className="weather-status-font">LOW</p> 
        </div>
                 
            
    );
    
}