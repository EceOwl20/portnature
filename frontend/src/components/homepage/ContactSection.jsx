import React, {useState} from 'react'

const ContactSection = ({header,header2,text,text2,phone, email, image,buttonText, buttonLink,checkboxText, iconImage,iconImage2}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <div className='flex w-screen items-center justify-center py-[80px]'>
      <div className='flex flex-col lg:flex-row w-[95%] lg:w-[90%] xl:max-w-[1669px] items-center justify-center font-monserrat text-[#233038] gap-[20px] lg:gap-[0px]'>
        <div className='flex flex-col lg:flex-row-reverse w-[100%] lg:w-[64%] items-center justify-center '>
        <img src={image.firebaseUrl} alt='callcenter' width={image.width} height={image.height} className='flex lg:hidden w-[60%] h-auto  max-w-[317px] max-h-[283px]' loading="lazy" />
        <img src={image.firebaseUrl} alt='callcenter' width={317} height={283} className='hidden lg:flex w-[40%] max-w-[317px] max-h-[283px]' loading="lazy" />

        <div className='flex flex-col w-[100%] md:w-[60%] lg:w-[40%] items-center justify-center text-center lg:justify-start lg:items-start lg:text-start gap-[6px] lg:gap-[20px]'>
          <h3 className='lg:text-[28px] text-[16px] md:text-[21px] font-lora font-medium leading-[23px] mt-3'>{header}</h3>
          <span className='lg:text-[20px] text-[12px] font-bold text-[#233038CC] leading-normal mb-4'>{text}</span>
          <div className='flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col w-[90%] items-center justify-center gap-[10px] sm:gap-[20px]'>
            <div className='flex items-center justify-center sm:justify-start w-[90%] gap-[7%]'>
              <img src={iconImage.firebaseUrl} className="flex" width={iconImage.width} height={iconImage.height} color="#64A4FF" fill="none" loading="lazy" />
              <p className='lg:text-[20px] text-[12px] font-normal leading-[30px]'>{phone}</p>
            </div>
            <div className='flex items-center  justify-center sm:justify-start w-[90%] gap-[7%]'>
            <img src={iconImage2.firebaseUrl} className="flex" width={iconImage2.width} height={iconImage2.height} loading="lazy" />
              <p className='lg:text-[20px] text-[12px] font-normal leading-[30px]'>{email}</p>
            </div>
            
          </div>
        </div>
        </div>

        <div className='flex flex-col w-[90%] lg:w-[32%] items-center justify-center text-center lg:items-start lg:text-start lg:gap-[15px]'>
          <h3 className='text-[20px] lg:text-[28px] font-lora font-medium leading-[32px] min-h-9'>{header2}</h3>
          <p className='text-[#233038CC] font-bold leading-normal lg:text-[20px] text-[12px] mb-[30px]'>{text2}</p>
          <form onSubmit={handleChange} className='flex flex-col w-full items-center lg:items-start justify-center text-[14px] leading-normal font-bold text-[#868686B3] gap-[20px]'>
          <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between gap-[20px]'>
          <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[85%] md:w-[60%] lg:w-[49%] py-[8px] lg:py-[12px] px-[16px] border border-[#CFCFCF] "
              placeholder='Name / Surname'
              required
            />

          <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[85%]  md:w-[60%] lg:w-[49%] py-[8px] lg:py-[12px] px-[16px] border border-[#CFCFCF] "
              placeholder='Email'
              required
            />
          </div>
            
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-[85%]  md:w-[60%] lg:w-full py-[8px] lg:py-[12px] px-[16px] border border-[#CFCFCF] "
              placeholder='Message'
              required
            />

        <label className="items-start inline-flex relative cursor-pointer text-[16px] text-[#212529] font-normal leading-normal text-start w-[85%] md:w-[60%] lg:w-[49%]">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
          className="peer hidden "
        />
       <span
    className="w-4 lg:w-6 h-4 lg:h-6 bg-gray-300 rounded-md mr-2 transition-colors duration-300 ease-in-out peer-checked:bg-blue-500 peer-hover:bg-gray-400 relative flex items-center justify-center"
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
  <span className='text-[13px]'>{checkboxText}</span>
        {/* <span className=" w-[20px] h-[20px] rounded-[4px] mr-[8px] transition-colors ease-in-out duration-300 border border-[#CFCFCF] bg-white hover:bg-[#64A4FF]"></span>
          I accept the <a href="/" className="text-[#000000] underline"> Terms and Conditions</a> */}
          </label>

            <button className='flex py-[12px] px-[45px] text-center bg-[#64A4FF] text-white leading-normal text-[14px] font-bold'>{buttonText}</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default ContactSection
