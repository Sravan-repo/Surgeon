import React, { useState } from "react";
import Tbilisi from "../assets/Tbilisi.jpg";
import { FaInstagram, FaYoutube} from "react-icons/fa";
import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import Common from "./Common";

const keyStats = [
  { value: "16,00,000", label: "NEET Aspirants", icon: "🩺" },
  { value: "30,000", label: "Students Enrolled Abroad", icon: "🎓" },
  { value: "1,08,000", label: "Students Studying Currently", icon: "📚" },
  { value: "1,50,000", label: "Foreign Medical Doctors in India", icon: "🏅" },
];

const topUniversities = [
  "Tbilisi State Medical University",
  "University of Georgia",
  "Caucasus International Medical University",
  "Georgian National University | SEU",
  "Akaki Tsereteli State Medical University",
  "Geomedi Medical University | Georgia",
  "David Tvildiani Medical University",
  "Batumi Shota Rustaveli State University",
  "Ilia State Medical University (ISU)",
  "Ivane Javakhishvili Tbilisi State University",
];

const collapsibleSections = [
  {
    header: "Study MBBS in Georgia Medical University",
    content: (
      <>
        Almost every year, more than 15 lac students prepare to get admission for MBBS in India but only 80,000 students get the chance. The others are left heartbroken; preparing harder to try their luck the next year or pay hefty fees of private medical colleges. However, nowadays, students are saving their academic years and money by choosing MBBS in Philippines, Ukraine, Kyrgyzstan, etc.
        <br /><br />
        However, if you are an MBBS aspirant looking to acquire admission in a reputed medical college, you can easily acquire your admission in one of the top medical colleges if you follow the right roadmap and guidance.
      </>
    ),
  },
  {
    header: "Duration of MBBS in Georgia Course",
    content: (
      <>
        MBBS degree in Georgia takes a total of about 5.5 years to get completed which is just a half year earlier than MBBS abroad. The first four and a half years of MBBS in Georgia are dedicated to medical learning, theoretical approaches, and basic clinical knowledge while the last one year is completely devoted to the internship for pragmatic learning and hands-on experience.
      </>
    ),
  },
  {
    header: "Fees to Study MBBS in Georgia",
    content: (
      <>
        Since there are public as well as private medical colleges to study MBBS in Georgia, there is a huge difference in their fee structure and amenities provided.
      </>
    ),
  },
  {
    header: "Government Medical Colleges in Georgia",
    content: (
      <>
        The fees of government medical colleges are very low as compared to private medical colleges and can be easily paid by students who come from middle-class families. But, getting enrolled in public medical colleges is a matter of sheer luck due to the criteria of merit and performance. The sole purpose of government medical colleges is to promote quality medical education by supporting the students financially.
        <br /><br />
        On average, the cost of MBBS in Georgia tuition fee in government medical colleges can be around 4,000 to 6,000 USD per annum. However, the hostel accommodation and food expenses are excluded but are not very high either.
      </>
    ),
  },
  {
    header: "Private Medical Colleges in Georgia",
    content: (
      <>
        The fees structure of private medical colleges is enormously expensive due to better facilities, high-class infrastructure, a larger number of teaching faculty, etc. Although private medical colleges are very good to study at, they are not a cakewalk for everyone due to their tremendously high fees structure.
        <br /><br />
        On average, the cost of MBBS in Georgia tuition fee in private medical colleges can be around Rs. 12,00,000 to Rs. 35,00,000 per annum. Moreover, the living costs usually sum up to around Rs. 20,000 or more – depending upon the city, location, preferences, etc.
      </>
    ),
  },
  {
    header: "Top Medical Colleges in Georgia",
    content: (
      <>
        There are a total number of 497 colleges for MBBS in India - 234 of them being government medical colleges whereas the other 253 of them being private medical colleges.
        <br />
        There are a total of 184 MCI recognized seats and 36 MCI permitted seats available in private medical colleges across India. Also, there are a total of 177 MCI recognized seats and 56 MCI permitted seats available in government medical colleges across India.
        <br /><br />
        Since there are around five hundred reputed medical colleges across India, it is nearly impossible to name all of them but all states have their best MBBS colleges. Based on ranking, result and number of MBBS degree holders each year, here is the list of top MBBS colleges of India:
        <ul className="list-disc ml-6 mt-2">
          <li>All India Institute of Medical Sciences (AIIMS), Delhi</li>
          <li>Armed Forces Medical College (AFMC), Pune</li>
          <li>JIPMER College, Puducherry</li>
          <li>Christian Medical College (CMC), Vellore</li>
          <li>Maulana Azad Medical College (MAMC), Delhi</li>
          <li>Grant Medical College, Mumbai</li>
          <li>Lady Hardinge Medical College (LHMC), Delhi</li>
          <li>King George Medical College, CMM Medical University, Lucknow</li>
          <li>Kasturba Medical College (KMC), Manipal</li>
          <li>Madras Medical College, Chennai</li>
          <li>University College of Medical Science & Research Centre, New Delhi</li>
          <li>Bangalore Medical College (BMC), Bangalore</li>
          <li>Seth G.S. Medical College, Mumbai</li>
          <li>Institute of Medical Sciences, Varanasi</li>
          <li>Sri Ramachandra Medical College and Research Institute, Chennai</li>
          <li>Aligarh Muslim University, Aligarh</li>
          <li>Christian Medical College (CMC), Ludhiana</li>
          <li>J. Medical College and Sassoon Hospital, Pune</li>
          <li>Stanley Medical College (SMC), Chennai</li>
          <li>MS Ramaiah Medical College, Bangalore</li>
        </ul>
      </>
    ),
  },
  {
    header: "Admission Process for MBBS in Georgia Program",
    content: (
      <>
        Till 2013, there were multiple numbers of entrance examinations required for getting admission in MBBS in Georgia. This caused a lot of problems, pressure and confusion amongst students and parents. After a lot of discussions and meetings, it was declared that there will be just one exam that will be mandatory for getting MBBS in Georgia admission.
        <br /><br />
        This is when NEET (National Eligibility cum Entrance Test) came into existence and replaced all other major exams such as AIPMT, PGIMER, JIPMER, State-wise CETs such as MHCET, WBJEE, EAMCET etc. NEET is now the only entrance test required for medical courses in government as well as private medical colleges in Georgia.
        <br /><br />
        The syllabus is based on the CBSE curriculum for the 11th and 12th standard which is easy for ISC students as well. The examination is held in the form of multiple-choice questions (MCQs) and if the students can achieve a minimum of 50 percentile in NEET, they are eligible for getting MBBS in Georgia admission.
      </>
    ),
  },
];

const Explorembbs = () => {
  // By default, all sections are closed
  const [openSections, setOpenSections] = useState(Array(collapsibleSections.length).fill(false));

  const toggleSection = (idx) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === idx ? !isOpen : isOpen))
    );
  };

  return (
    <div className="bg-white w-full py-10 px-2 md:px-8 lg:px-20 flex flex-col md:flex-row gap-10">
      {/* Left Section */}
      <div className="md:w-2/3 w-full flex flex-col">
        <h1 className="text-4xl font-semibold mb-4 select-none">
          <span className="text-black">MBBS</span>{" "}
          <span className="text-green-600">in GEORGIA</span>
        </h1>
        <div className="flex mb-5 gap-3">
          <button className="bg-green-600 text-white font-semibold px-6 py-2 hover:bg-green-800 transition-colors">
            Book Your Seat Now
          </button>
          <button className="bg-gray-800 text-white font-semibold px-6 py-2  hover:bg-gray-900 transition-colors flex items-center gap-2">
            <span>Download Fee Structure</span>
            {/* <span>⬇️</span> */}
          </button>
        </div>
        <div className="w-full h-64 overflow-hidden mb-6 shadow">
          <img src={Tbilisi} alt="Tbilisi University" className="w-full h-full object-cover" />
        </div>

        {/* Collapsible Content Sections */}
        <div className="bg-white p-4 md:p-6">
          {collapsibleSections.map((section, idx) => (
            <div key={idx} className="mb-6 border-b border-gray-200 pb-2 last:mb-0 last:border-b-0 last:pb-0">
              <button
                className="w-full text-md font-semibold text-green-600 mb-2 flex items-center justify-between cursor-pointer focus:outline-none bg-transparent"
                onClick={() => toggleSection(idx)}
                aria-expanded={openSections[idx]}
                aria-controls={`section-${idx}`}
              >
                {section.header}
                <span className={`ml-2 transition-transform ${openSections[idx] ? "rotate-180" : ""}`}>
                  {openSections[idx] ? "▲" : "+"}
                </span>
              </button>
              {openSections[idx] && (
                <div
                  id={`section-${idx}`}
                  className="text-gray-700 mt-2 animate-fadein"
                  style={{ transition: "opacity 0.2s" }}
                >
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-50 p-4 shadow">
              <span className="text-3xl mb-2">{stat.icon}</span>
              <span className="text-green-600 font-semibold text-xl">{stat.value}</span>
              <span className="text-gray-700 mt-2 text-center text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/3 w-full flex flex-col gap-6">
        {/* About Us */}
       <div className="bg-green-600 p-6 flex flex-col">
        <h3 className="text-lg font-semibold justify-center mb-2 text-white">About Us</h3>
        <p className="text-white items-start mb-3">
          Reddys Consultancy is a leading consultancy based in Hyderabad & Vishakapatnam,
          that caters MBBS abroad admissions throughout India & Georgia.
        </p>
        <div className="flex gap-4 mt-2 justify-center text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-pink-300 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-white hover:text-blue-300 transition-colors"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white hover:text-red-400 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
        {/* Top Universities */}
        <div className="bg-white p-6">
          <h3 className="text-lg font-semibold mb-3 text-green-700">Top Medical Universities in Georgia</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {topUniversities.map((uni, idx) => (
              <li key={idx} className="text-sm">{uni}</li>
            ))}
          </ul>
        </div>
        {/* Enquiry Form */}
        <div className="bg-white p-6 border border-gray-200">
          <h3 className="text-lg text-green-600 font-semibold mb-3">Enquire Now</h3>
          <form className="flex flex-col gap-3">
            <input
              className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              type="text"
              placeholder="Full Name*"
            />
            <input
              className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              type="email"
              placeholder="Email*"
            />
            <input
              className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              type="tel"
              placeholder="Mobile Number*"
            />
            <textarea
              className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Message"
              rows={2}
            />
            <button className="bg-green-600 text-white font-semibold py-2 hover:bg-green-700 transition-colors">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Explorembbs;
