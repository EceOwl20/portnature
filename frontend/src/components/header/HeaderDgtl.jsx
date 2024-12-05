import React from 'react'
import DgtlLogo from '../../../public/logo/DgtlLogo'
import { Link } from "react-router-dom"

const HeaderDgtl = () => {
  return (
    <header className='flex w-screen items-center justify-center z-[1000] bg-[#0e0c1b] top-0 sticky h-[80px]'>
        <Link to="/panel">
            <DgtlLogo width={200} height={50}/>
        </Link>
      <nav className='flex whitespace-nowrap '>
        <a className='flex- text-white p-[10px] text-[17px] rounded-md hover:text-black hover:bg-white'></a>
      </nav>
    </header>
  )
}

export default HeaderDgtl
