import React, { useState }  from 'react'
import FindRestaurantCard from './FindRestaurantCard'

const FilterFindCafe = ({image, iconImage, header, text, text2, text3, filterItems=[]}) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

    const [selectedTime, setSelectedTime] = useState([]);
    const [selectedKidsFriendly, setSelectedKidsFriendly] = useState([]);
    const [selectedAgeLimit, setSelectedAgeLimit] = useState([]);

      // Checkbox değişikliği işleme işlevi
      const handleCheckboxChange = (event, setFilter) => {
        const { value, checked } = event.target;
        setFilter((prevFilters) => 
          checked ? [...prevFilters, value] : prevFilters.filter((item) => item !== value)
        );
      };
  
      const [filters, setFilters] = useState({
          time: '',
          kidsFriendly: '',
          AgeLimit: '',
        });
  
          // Filtreleri güncelleme işlevi
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
      
    };
  
  const filterCards = (card) => {
      return (
        (selectedTime.length === 0 || selectedTime.includes(card.time)) &&
        (selectedKidsFriendly.length === 0 || selectedKidsFriendly.includes(card.kidsFriendly)) &&
        (selectedAgeLimit.length === 0 || selectedAgeLimit.includes(card.ageLimit))
      );
    };
  
  
    const filteredAndSortedCards = [...filterItems]
    .filter(filterCards)

  return (
    <div className='flex w-screen h-auto py-10 justify-center items-center'>
      <div className='flex flex-col w-[90%] lg:w-[75%] xl:max-w-[1180px] justify-center items-center text-start'>
       <div className='flex w-full items-center justify-between text-start '>
        <div className='flex items-start justify-start text-start gap-[30px] w-[40%]'>
        <img src={iconImage.firebaseUrl} width={30} height={47}/>
        <h2 className='text-[25px] lg:text-[35px] text-customGray80 font-medium font-lora leading-normal uppercase'>{header}</h2>
        </div>

       <div className='flex items-center justify-between w-[60%]'>
       <div className='flex items-center justify-center w-[30%] text-[25px] font-lora text-customGray italic font-medium leading-[42px] tracking-[-0.875px]  '>
          <label className='cursor-pointer items-center justify-center'>
            <input
            className='h-[25px] w-[25px] border border-[#868686] mr-[25px]'
              type="checkbox"
              value="7/24"
              onChange={(e) => handleCheckboxChange(e, setSelectedTime)}
              checked={selectedTime.includes("7/24")}
            />
            {text}
          </label>
      </div>
      <div className='flex w-[30%] text-[25px] whitespace-nowrap font-lora text-customGray italic font-medium leading-[42px] tracking-[-0.875px]'>
          <label className='cursor-pointer'>
            <input
             className='h-[25px] w-[25px] border border-[#868686] mr-[25px]'
              type="checkbox"
              value="true"
              onChange={(e) => handleCheckboxChange(e, setSelectedKidsFriendly)}
              checked={selectedKidsFriendly.includes("true")}
            />
            {text2}
          </label>
      </div>
      <div className='flex w-[30%] text-[25px] font-lora text-customGray italic font-medium leading-[42px] tracking-[-0.875px]'>
          <label className=' cursor-pointer '>
            <input
             className='h-[25px] w-[25px] border border-[#868686] mr-[25px]'
              type="checkbox"
              value="+18"
              onChange={(e) => handleCheckboxChange(e, setSelectedAgeLimit)}
              checked={selectedAgeLimit.includes("+18")}
            />
            {text3}
          </label>
      </div>
       </div>


       </div>
        <div className='flex flex-col md:grid grid-cols-2 w-full gap-[25px] lg:gap-[3%] mt-10 justify-between items-center'>
        {filteredAndSortedCards.map((restaurant, index) => (
        <FindRestaurantCard
          key={index}
          header={restaurant.header}
          text={restaurant.text}
          link={restaurant.buttonLink}
          icon={restaurant.iconImage}
          image={restaurant.image}
          time={restaurant.time}
          kidsFriendly={restaurant.kidsFriendly}
          ageLimit={restaurant.ageLimit}
        />
      ))}
            
        </div>
      </div>
    </div>
  )
}

export default FilterFindCafe
