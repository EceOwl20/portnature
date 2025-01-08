import React from 'react'
import Aquapark from "../Images/Aquapark1.png"
import { Link } from "react-router-dom"

const Section3 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col h-[752px] w-full items-start justify-end'style={{
            backgroundImage: `
                linear-gradient(to top, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 50%), 
                url(${Aquapark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='flex flex-col items-center justify-center'>
                <h3>Aquapark</h3>
                <p>18 slides · Safety for your child</p>
                <Link>More About</Link>
            </div>
        </div>
    </div>
  )
}

export default Section3