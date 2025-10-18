import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1aefb78d572a349ec358f33b3acd50ce";

    let getWeatherInfo=async ()=>{
        try {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
        
    };
    

    let handleChange=(evt)=>{
        setCity(evt.target.value);
        setError(false); 
    };

    let handleSubmit=async (evt)=>{
        try {
            evt.preventDefault();
            console.log(city);
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);   // ✅ reset error on success
            setCity("");
        } catch(err) {
            setError(true);
            setCity("");
        }
    };

    return (
        <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br></br>
        <br></br>
         <Button variant="contained" type='Submit'>Search</Button>
         {error && <p style={{color:"red"}}>No Such Place Exists!</p>}
      </form>
        </div>
    );
}