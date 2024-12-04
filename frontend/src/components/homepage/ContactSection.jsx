import React, {useState} from 'react'
import image from "../../../public/images/callcenter.webp"
import PhoneSvg from "../../svg/PhoneSvg"
import MessageSvg from "../../svg/MessageSvg"
import WhatsappSvg from "../../svg/WhatsappSvg"
import CallCenterSvg from "../../svg/CallCenterSvg"

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='flex w-screen items-center justify-center bg-[#F8F8F8] py-[76px]'>
      <div className='flex flex-col lg:flex-row w-[95%] lg:w-[90%] xl:max-w-[1669px] items-center justify-center font-monserrat text-[#233038] gap-[20px] lg:gap-[0px]'>
        {/* <CallCenterSvg className="flex lg:hidden" width={134} height={119.63}/>
        <CallCenterSvg className="hidden lg:flex"  width={317} height={283}/> */}
        <div className='flex flex-col lg:flex-row-reverse w-[100%] lg:w-2/3 items-center justify-center'>
        <img src={image} alt='callcenter' width={image.width} height={image.height} className='flex lg:hidden w-[60%] h-auto  max-w-[317px] max-h-[283px]'/>
        <img src={image} alt='callcenter' width={317} height={283} className='hidden lg:flex w-[40%] max-w-[317px] max-h-[283px] '/>

        <div className='flex flex-col w-[100%] md:w-[60%] lg:w-[40%] items-center justify-center text-center lg:justify-start lg:items-start lg:text-start gap-[20px]'>
          <h3 className='lg:text-[28px] text-[25px]  font-lora font-medium leading-[23px]'>Free contact call center</h3>
          <span className='lg:text-[20px] text-[12px] font-bold text-[#233038CC] leading-normal'>Or online booking</span>
          <div className='flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col w-[90%] items-center justify-center gap-[10px] sm:gap-[20px]'>
            <div className='flex items-center justify-center sm:justify-start w-[90%] gap-[7%]'>
              <PhoneSvg className="flex" width={18} height={19} color="#64A4FF" fill="none"/>
              <p className='lg:text-[20px] text-[12px] font-normal leading-[30px]'>+ 90 (242) 731 11 77</p>
            </div>
            <div className='flex items-center  justify-center sm:justify-start w-[90%] gap-[7%]'>
              <MessageSvg className="flex" width={21} height={17}/>
              <p className='lg:text-[20px] text-[12px] font-normal leading-[30px]'>info@portnature.com.tr</p>
            </div>
            <div className='flex items-center  justify-center sm:justify-start w-[90%] gap-[7%]'>
              <PhoneSvg className="flex" width={18} height={19} color="#64A4FF" fill="none"/>
              <p className='lg:text-[20px] text-[12px] font-normal leading-[30px]'>+ 90 (242) 731 07 07</p>
            </div>
            
            <div className='flex items-center  justify-center sm:justify-start w-[90%] gap-[7%]'>
              <WhatsappSvg className="flex" width={19.393} height={19.395} color="#64A4FF"/>
              <p className='lg:text-[20px] text-[12px] font-bold leading-[30px] text-[#64A4FF]'>Whatsapp</p>
            </div>
          </div>
        </div>
        </div>

        <div className='flex flex-col w-[95%] lg:w-1/3 items-center justify-center text-center lg:items-start lg:text-start gap-[15px]'>
          <h3 className='text-[28px] font-lora font-medium leading-[32px]'>Send Message</h3>
          <p className='text-[#233038CC] font-bold leading-normal lg:text-[20px] text-[12px] mb-[30px]'>All your questons, options, suggestions</p>
          <form onSubmit={handleChange} className='flex flex-col w-full items-center lg:items-start justify-center text-[14px] leading-normal font-bold text-[#868686B3] gap-[20px]'>
          <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between gap-[20px]'>
          <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-[60%] lg:w-[49%] py-[12px] px-[16px] border border-[#CFCFCF] "
              placeholder='Name / Surname'
              required
            />

          <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-[60%] lg:w-[49%] py-[12px] px-[16px] border border-[#CFCFCF] "
              placeholder='Email'
              required
            />
          </div>
            
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full md:w-[60%] lg:w-full py-[12px] px-[16px] border border-[#CFCFCF] "
              placeholder='Message'
              required
            />

        <label className="items-start inline-flex relative cursor-pointer text-[16px] text-[#212529] font-normal leading-normal text-start w-full">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
          className="peer hidden"
        />
       <span
    className="w-6 h-6 bg-gray-300 rounded-md mr-2 transition-colors duration-300 ease-in-out peer-checked:bg-green-500 peer-hover:bg-gray-400 relative flex items-center justify-center"
  >
    {/* Tik işareti */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-white hidden peer-checked:block z-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
  <span>Ben robot değilim</span>
        {/* <span className=" w-[20px] h-[20px] rounded-[4px] mr-[8px] transition-colors ease-in-out duration-300 border border-[#CFCFCF] bg-white hover:bg-[#64A4FF]"></span>
          I accept the <a href="/" className="text-[#000000] underline"> Terms and Conditions</a> */}
          </label>

            <button className='flex py-[12px] px-[45px] text-center bg-[#64A4FF] text-white leading-normal text-[14px] font-bold'>Send</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default ContactSection
