import React, { useState } from "react";
import Display from "./Display";


const SearchBox=()=>{

    const api_key = import.meta.env.VITE_WEATHER_KEY;


    const [city,setcity]=useState("")
    const [weather,setweather] = useState("")
    const [error,seterror]=useState("")
    const handleApi=async()=>{
        if(!city){
            alert("Enter City")
        }
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
        const response= await fetch(url)
        
    if (!response.ok) {
      const msg = `City "${city}" not matched`;
      seterror(msg);
      setweather(null);
      return;
    }
        const data = await response.json()
        setweather(data);
        seterror("")
        
    }
    return(
        <>
         <h1>Whether API</h1>
        <div className="search">
            <input
                onChange={(e)=>setcity(e.target.value)}
             placeholder="Serach.." id="search"></input>
            <button onClick={handleApi}>Search</button>
        </div>
        <Display weather={weather} setweather={setweather} error={error}></Display>
        </>
       
    )
}

export default SearchBox