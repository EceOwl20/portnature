import React from 'react'
import { Link } from 'react-router-dom'

const BookTransfer = ({header,span,buttonText,buttonLink,images}) => {
  return (
    <div className='flex w-screen items-center justify-center my-[150px]'>
      <div className='flex w-[85%] items-center justify-around relative'>
        <img src={images[0].firebaseUrl} className="flex" width={353} height={200}/>
        <div className='flex flex-col w-[25%] text-center items-center justify-center'>
            <h2 className='text-[25px] text-customGray font-normal font-lora leading-[42px]'>{header}</h2>
            <p className='text-[16px] text-customGray80 font-bold font-monserrat leading-[30px]'>{span}</p>
            <Link to={buttonLink} className='flex items-center justify-center mt-[30px] py-[12px] px-[26px] border border-[#6B6B6B] text-customGray leading-normal font-monserrat text-[14px] font-bold'>{buttonText}</Link>
        </div>
        <img src={images[1].firebaseUrl} className="flex" width={166} height={148}/>
        <div className="absolute -top-[35%] z-1 flex justify-between items-center">
        <img src={images[2].firebaseUrl} className="flex" width={12} height={21}/>
        <img src={images[3].firebaseUrl} className="flex w-screen" height={193.895}/>
        <img src={images[4].firebaseUrl} className="flex" width={17.39} height={21.05}/>
        </div>

        <img src={images[5].firebaseUrl} className="absolute -top-[20%] right-[20%]" width={272} height={86}/>
        <img src={images[6].firebaseUrl} className="absolute top-[50%] left-[10%]" width={54} height={116}/>
        <img src={images[7].firebaseUrl} className="absolute -top-[35%] left-[25%]" width={71.307} height={53.156}/>
        <img src={images[8].firebaseUrl} className="absolute -top-[35%] right-[35%]" width={65} height={23}/>
        <img src={images[9].firebaseUrl} className="absolute -top-[45%] right-[40%]" width={46} height={18}/>
        <img src={images[10].firebaseUrl} className="absolute -top-[60%] right-[15%]" width={64} height={58}/>
        <img src={images[11].firebaseUrl} className="absolute -top-[45%] right-[1%]" width={192} height={187}/>
        <img src={images[12].firebaseUrl} className="absolute top-[55%] right-[4%]" width={32} height={35}/>
      </div>
    </div>
  )
}

export default BookTransfer
