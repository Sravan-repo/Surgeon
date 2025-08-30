import React from 'react';
import tution from '../assets/tuition.png';
import university from '../assets/university.png';
import checklist from '../assets/checklist.png';
import exam from '../assets/exam.png';
import healthcare from '../assets/healthcare.png';
import language from '../assets/language.png';


const mbbsReasons = [
  {
    img: tution,
    title: 'Low Tuition Fees',
    text: "MBBS abroad can be affordable! Many universities offer low tuition fees and economical living costs, letting students study without excessive financial burden.",
  },
  {
    img: university,
    title: 'Top Medical Universities',
    text: "Gain access to top-ranked international universities. Our experts will guide you to prestigious institutions and help you succeed in your medical career.",
  },
  {
    img: checklist,
    title: 'NMC/WHO Approved',
    text: "Study at universities recognized by the WHO and NMC. We assist you in choosing only authorized institutions for your bright future.",
  },
  {
    img: exam,
    title: 'No Entrance Exam',
    text: "No need to worry about entrance exams. If you meet the eligibility criteria, you can apply directly—streamlining your path to a global medical career.",
  },
  {
    img: healthcare,
    title: 'No Donation',
    text: "No hidden charges or donations. You pay only the transparent, university-specified fee structure—no surprises, just honest guidance.",
  },
  {
    img: language,
    title: 'Study in English Medium',
    text: "All courses are taught in English, so there’s no language barrier. Eklavya helps you adapt, thrive, and communicate confidently from day one.",
  }
];

const Common = () => {
  return (
    <div className="py-16 px-2 md:px-8 ">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-xl font-bold text-slate-900 mb-2 tracking-tight">
          Why Study MBBS Abroad?
        </h2>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Reddys Overseas gives you several great reasons to consider MBBS studies abroad
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {mbbsReasons.map((card, idx) => (
          <div
            key={idx}
            className="p-8 flex flex-col items-center text-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-20 h-20 mb-5 object-contain"
            />
            <h3 className="font-bold text-md text-slate-900 mb-2">{card.title}</h3>
            <p className="text-sm text-slate-900 leading-snug">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Common;
