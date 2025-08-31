import React, { useState, useEffect, useRef } from 'react';
import doc6 from '../assets/doc6.png';
import doc7 from '../assets/doc7.png';
import doc8 from '../assets/doc8.png';
import doc9 from '../assets/doc9.png';

// Replace these with your actual images
const testimonials = [
  {
    name: "Nishant Kharb",
    state: "Haryana",
    image: doc6,
    text: "I am grateful to Reddy consultancy to help me get admission in Akaki State Medical University, Georgia. I strongly recommend them as the efficient faculty booked my seat for the course and helped me find accommodation."
  },
  {
    name: "Sanskar Singh",
    state: "Uttar Pradesh",
    image: doc7,
    text: "My dreams came true! I wanted to study MBBS in Georgia, but I was unable to complete my application due to proper guidance. The team of Reddy consultancy guided me well and helped me study MBBS in Ivane Javakhishvili Tbilisi State University."
  },
  {
    name: "Harsh Gautam",
    state: "Haryana",
    image: doc8,
    text: "Are you clueless about how to join MBBS courses in Georgia? Then contact Reddys Consultancy in the first place. The best educational consultants helped me finish my MBBS in Georgia from Akaki Tsereteli State University."
  },
  {
    name: "Sharath",
    state: "Kearala",
    image: doc9,
    text: "My dreams came true! I wanted to study MBBS in Georgia, but I was unable to complete my application due to proper guidance. The team of Reddy consultancy guided me well and helped me study MBBS in Ivane Javakhishvili Tbilisi State University."
  },
  {
    name: "Harsh Gautam",
    state: "Haryana",
    image: doc8,
    text: "Are you clueless about how to join MBBS courses in Georgia? Then contact Reddys Consultancy in the first place. The best educational consultants helped me finish my MBBS in Georgia from Akaki Tsereteli State University."
  },
];

const Testimonials = () => {
  const [startIdx, setStartIdx] = useState(0);
  const intervalRef = useRef();

  const visibleCount = 3;
  const total = testimonials.length;

  // Auto-slide logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [total]);

  // Manual navigation
  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
    clearInterval(intervalRef.current);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
    clearInterval(intervalRef.current);
  };

  // Get 3 testimonials, wrap around if needed
  const getVisibleTestimonials = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(testimonials[(startIdx + i) % total]);
    }
    return arr;
  };

  return (
    <div className="py-16 px-4 sm:px-6 md:px-16 mb-10">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        {/* Header */}
        <div className=" px-6 sm:px-10 py-4 mb-8 w-full max-w-md sm:max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">What Our Students Say</h2>
          <p className="text-gray-600 text-sm font-small leading-relaxed">
            Listen to our successfully Placed Students
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-40px] z-10 p-2 hover:bg-gray-100 transition hidden md:flex items-center justify-center"
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              className="stroke-current"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex space-x-2 sm:space-x-6 overflow-x-auto px-2 sm:px-6">
            {getVisibleTestimonials().map((t, idx) => (
              <div
                key={idx}
                className=" overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0
                      w-[250px] sm:w-[280px] md:w-[320px]"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[full] h-[full] sm:h-56 md:h-60 object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-800 truncate">{t.name}</span>
                    <span className="italic text-gray-500 text-xs">{t.state}</span>
                  </div>
                  <p className="text-gray-700 text-sm ">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-40px] z-10 p-2 hover:bg-gray-100 transition hidden md:flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              className="stroke-current"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
