import React from 'react'
import VolleyballImg from '../Images/PortNatureVoleyball.png'
import { Link } from 'react-router-dom'

const Section3 = ({header,text,image, lang, links, linksText}) => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-row-reverse gap-24 mt-12 mb-12 max-w-[1920px] items-center justify-center'>
        <img src={image.firebaseUrl} className='w-5/12' />
        <div className='flex flex-col w-3/12 gap-7 relative'>
            <h2 className='text-start flex font-lora text-[40px] font-medium leading-normal mb-4'>
                {header[lang]}
            </h2>
                <div className='flex w-5/12 mt-6 mb-4 absolute top-12 -left-12'>
                <div className="bg-custom-gradient h-[1px] w-[50%]">
                </div>
                <div className="bg-custom-gradient-reverse h-[1px] w-[50%]">
                </div>
                </div>
            <p className='flex font-monserrat max-w-[361px] text-[15px] font-normal leading-5'>
            {text[lang]}
            </p>
            <Link to={links[lang]} className='flex border border-solid-[1px] w-28 p-3 text-[14px] font-monserrat font-bold leading-normal hover:bg-[#868686] whitespace-nowrap'>{linksText[lang]}</Link>
        </div>
    </div>
    </div>
  )
}

export default Section3