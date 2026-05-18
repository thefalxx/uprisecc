'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const images = [
  '/images/uprise images/huge-crane-site.jpg',
  '/images/uprise images/upr-work.avif',
  '/images/uprise images/grilld-closeup.png',
  '/images/uprise images/crane-lift.avif',
  '/images/uprise images/crane-lifting.avif',
  '/images/uprise images/arm-crane.jpg',
  '/images/uprise images/crane-sunset-1.jpg',
  '/images/uprise images/tower-crane.jpg',
  '/images/uprise images/crane-sunset-2.jpg',
  '/images/uprise images/top-crane-2.jpg',


  // Add more images as needed
];



export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <section className="py-12 px-4">
      {/* Section Title */}

      <h2 className="mb-4 text-4xl text-center font-bold text-gray-800 dark:text-white">
        Uprise Cranes and Contractors Works
      </h2>

      {/* Optional extra caption */}
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center">
        These images highlight the hands-on expertise of Uprise Cranes and Contractors—featuring real projects, crane operations, rigging setups, and structural steel work that demonstrate our team&apos;s precision, safety, and professionalism on-site.
      </p>

      {/* Carousel */}
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg shadow-lg h-[600px]">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-80"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-80"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full ${
                current === idx ? "bg-white" : "bg-gray-400"
              } hover:bg-white`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}