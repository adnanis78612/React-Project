import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike: 30.38,
        temp: 30.05,
        humidity: 45,
        tempMax: 30.05,
        tempMin: 30.05,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Adnan</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}