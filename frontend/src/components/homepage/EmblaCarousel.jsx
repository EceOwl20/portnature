import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import 'tailwindcss/tailwind.css';

const carouselItems = [
  {
    image: "../../../public/images/homepage/KingRoom.png",
    title: 'FAMILY ROOM',
    description: 'A luxurious holiday with your loved ones is waiting for you in Family Room',
    capacity: '4 Adults + 1',
    size: '45 m²',
    view: 'Corner Sea View',
    link: '/family-room',
  },
  // Add more items as needed
];

const CarouselItem = ({ item }) => (
  <div className="flex flex-col items-center justify-center mx-4">
    <div className="relative w-[300px] h-[400px]">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p>{item.capacity} · {item.size} · {item.view}</p>
      </div>
    </div>
    <div className="mt-4 p-4 border border-gray-300 rounded-lg text-center w-[260px]">
      <p>{item.description}</p>
      <a
        href={item.link}
        className="block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        More About
      </a>
    </div>
  </div>
);

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;

/* Inline CSS for Embla Carousel */
const emblaCarouselStyle = `
.embla {
  display: flex;
  overflow: hidden;
  width: 100%;
}
.embla__container {
  display: flex;
}
.embla__slide {
  position: relative;
  min-width: 100%;
  flex: 0 0 auto;
}
`;

const style = document.createElement('style');
style.innerHTML = emblaCarouselStyle;
document.head.appendChild(style);
