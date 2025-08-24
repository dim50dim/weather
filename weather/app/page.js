"use client"
import Image from 'next/image';
import axios from "axios";

import { useState } from "react";
import {BsSearch} from "react-icons/bs";
import Weather from './components/Weather';
import Spinner from '../public/spinner.gif'


export default function Home() {
  const [city,setCity] = useState('')
  const [weather,setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
         setWeather(response.data);
        //  console.log(response.data);
         
    })
     setCity("");
     setLoading(false);
  
 }

   if(loading){
       return <Spinner/>
   }else{
 return (
    <div>
      
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'>
     <Image
        src="https://images.unsplash.com/photo-1693910176136-b06d8326f0e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        fill
        className="object-cover"
      />
      </div>
                  {/* search  */}
                    <div className='mt-50 relative flex justify-between  items-center max-w-[500px] m-auto z-10 text-gray-600'>
                         <form
                          onSubmit={fetchWeather}
                         className='flex justify-between  items-center w-full m-auto bg-transparent border border-gray-600 rounded-2xl ' >
                           <div>
                            <input  
                            onChange={(e) => setCity(e.target.value)}
                            className='bg-transparent p-1  text-gray-600 focus:outline-none text-2xl' type="text" placeholder='Search city' />
                           </div>
                           <button className='p-1' onClick={fetchWeather}><BsSearch size={20}/></button>
                         </form>
                    </div>
                    {/* weather  */}
                    {weather.main && <Weather data={weather}/>}
    </div>
  );
   }
}
