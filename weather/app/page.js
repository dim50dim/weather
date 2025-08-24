import axios from "axios";

import { useState } from "react";
import {BsSearch} from "react-icons";



export default function Home() {
  const [city,setCity] = useState('')
  const [weather,setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then.apply((response) => {
         setWeather(response.data);
         console.log(response.data);
         
    })
  }

  return (
    <div>
          
    </div>
  );
}
