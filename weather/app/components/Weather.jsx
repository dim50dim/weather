import React from 'react'
import Image from 'next/image';



const Weather = ({data}) => {
    console.log(data);
    
  return (
    
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] p-4 m-auto text-gray-300 z-10'>
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
             <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p> {data.weather[0].main} </p>
        </div>
        <p> {data.main.temp.toFixed(0)}&#176; </p>
      </div>
    </div>
  )
}

export default Weather
