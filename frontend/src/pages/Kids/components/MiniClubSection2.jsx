import React from 'react'

const MiniClubSection2 = () => {
  return (
    <section className="flex flex-col max-w-[1920px] mx-auto items-center justify-center">
      <div className="flex flex-col gap-16 w-full">
        {/* Border */}
        <div className="flex border border-dotted w-screen"></div>

        {/* İlk Bölüm */}
        <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src="/images/miniclub/treasure-hunt.png" 
              alt="Treasure Hunt" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10 text-start">TREASURE HUNT</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] text-start leading-5 font-normal font-monserrat max-w-lg text-[#000]">
              We have prepared an exciting treasure hunt game to awaken the adventurer within your child. This thrilling activity aims to provide an unforgettable experience by enhancing communication, problem-solving, and clue-finding skills!
            </p>
          </div>
        </div>

        {/* İkinci Bölüm */}
        <div className="flex flex-row-reverse items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src="/images/miniclub/port-olympiad.png" 
              alt="Port Olympiad" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-start gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10">PORT OLYMPIAD</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg">
              With a mix of individual and team sports activities, our goal is to provide your child with a healthy and enjoyable experience. At Port Sports Games, we strive to entertain your children with fun-filled activities that promote physical well-being and foster a sense of teamwork.
            </p>
          </div>
        </div>

        {/* Üçüncü Bölüm */}
        <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src="/images/miniclub/kids-cheff.png" 
              alt="Kid Chef" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10 text-start">KID CHEF</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] text-start leading-5 font-normal font-monserrat max-w-lg">
              We aim to create fun and delicious experiences to help your children understand the concept of recipes, including gathering ingredients and cooking meals. Our goal is to make the learning process enjoyable as they embark on their culinary adventures, exploring the world of flavors and culinary creativity.
            </p>
          </div>
        </div>

        {/* Dördüncü Bölüm */}
        <div className="flex flex-row-reverse items-center justify-center max-w-[1920px] mx-auto gap-44">
          <div className="flex w-[700px] h-[500px] items-center justify-center"> {/* Resim genişliği ve yüksekliği artırıldı */}
            <img 
              src="/images/miniclub/group-of-kindergarten.jpg" 
              alt="Art Class" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-start gap-2">
            <h2 className="text-[20px] font-lora italic font-medium leading-10">ART CLASS</h2>
            <div className="flex w-[50%] -ml-12 mb-8">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
            <p className="text-[15px] leading-5 font-normal font-monserrat max-w-lg">
              We offer engaging painting lessons to nurture the artists within our young guests. These lessons are designed to inspire creativity and provide a supportive environment for children to explore their artistic talents. Through our painting classes, we aim to cultivate a love for art and self-expression, making it an unforgettable and enriching experience for every child.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniClubSection2
