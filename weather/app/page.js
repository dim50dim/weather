"use client"

import axios from "axios";

import { useState } from "react";
import {BsSearch} from "react-icons";



export default function Home() {
  const [city,setCity] = useState('')
  const [weather,setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
         setWeather(response.data);
         console.log(response.data);
         
    })
     setCity("");
     setLoading(false);
  }

  return (
    <div>
          <button onClick={fetchWeather}>Fetch data</button>
    </div>
  );
}
