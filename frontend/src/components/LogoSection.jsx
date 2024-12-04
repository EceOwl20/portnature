import React from 'react'
import logo from "../../public/images/hennessy.png"

const LogoSection = () => {
  return (
    <div className='flex bg-[#F8F8F8] w-full items-center justify-center h-[22vh] my-10'>
      <div className='flex w-[90%] items-center justify-between'>
        <img src={logo} alt='logo' width={logo.width} height={logo.height}/>
        <img src={logo} alt='logo' width={logo.width} height={logo.height}/>
        <img src={logo} alt='logo' width={logo.width} height={logo.height}/>
        <img src={logo} alt='logo' width={logo.width} height={logo.height}/>
        <img src={logo} alt='logo' width={logo.width} height={logo.height}/>
      </div>
    </div>
  )
}

export default LogoSection
