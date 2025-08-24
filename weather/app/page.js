import axios from "axios";

import { useState } from "react";
import {BsSearch} from "react-icons";



export default function Home() {
  const [city,setCity] = useState('')
  const [weather,setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  
  
  return (
    <div>
          
    </div>
  );
}
