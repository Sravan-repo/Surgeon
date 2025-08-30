import React from 'react';
import Student from '../assets/Student.jpg';
import Student1 from '../assets/Student1.jpg';
import Student2 from '../assets/Student2.jpg';
import Student3 from '../assets/Student3.jpg';
import Student4 from '../assets/Student4.jpg';
import Student5 from '../assets/Student5.jpg';
import Student6 from '../assets/Student6.jpg';
import Student8 from '../assets/Student8.jpg';



const images = [
  Student,
  Student1,
  Student2,
  Student3,
  Student4,
  Student5,
  Student6,
  Student8,
  Student6,
  Student,
  Student1,
  Student2,
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
