import React, { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UserCarousel = () => {
  const [users, setUsers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,  
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 15 }, 
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users")  
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  useEffect(() => {
    if (!slider.current) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, 2000);

    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col relative px-4 py-4">
      <div ref={sliderRef} className="keen-slider">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            className="keen-slider__slide"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400">Age: {user.age}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
      >
        <ChevronRight />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {users.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default UserCarousel;
