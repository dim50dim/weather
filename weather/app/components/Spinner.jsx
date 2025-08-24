import React from 'react'
import Image from 'next/image'
import spinner from '../public/spinner.gif'
const Spinner = () => {
  return (
    <div>
        <Image src={spinner} alt='Loading'/>
    </div>
  )
}

export default Spinner
