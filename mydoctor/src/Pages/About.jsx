import React from 'react'
import { assets } from '../assets/assets'
import {
  FaUniversity,
  FaUserTie,
  FaMoneyBill,
  FaMoneyBillWave,
  FaUserCog,
  FaPassport,
  FaHotel,
  FaBriefcase,
  FaGraduationCap,
  FaComments,
  FaTrophy,
  FaHome,
  FaShieldAlt,
  FaUserFriends,
  FaBook
} from 'react-icons/fa';

    const cardData = [
      {
        icon: <FaUniversity className="text-blue-700 text-3xl mb-3" />,
        title: "Book your University",
        text: "We are connected to several NMC-approved universities and guide our candidates to get admission. Our team prepares a list of available universities with experienced teaching staff and years of reputation."
      },
      {
        icon: <FaUserTie className="text-blue-700 text-3xl mb-3" />,
        title: "Career Planning",
        text: "As you finish your MBBS course, we guide you ahead for further studies. You can consult our experienced mentors regarding post-graduation courses, and they will help you with apt solutions."
      },
      {
        icon: <FaMoneyBill className="text-blue-700 text-3xl mb-3" />,
        title: "Financial Advice",
        text: "Studying abroad sounds nice until parents face a financial crisis. So we are here to help you manage all the tuition fees, from food expenses to air tickets. So contact Reddys and do not compromise your dreams."
      },
      {
        icon: <FaUserCog className="text-blue-700 text-3xl mb-3" />,
        title: "Customised Solutions",
        text: "We offer customised solutions for each student. When you come to us, our faculty will check your past educational details and scorecard and find out the right universities. From documentation to accommodation, we will guide you thoroughly."
      },
      {
        icon: <FaPassport className="text-blue-700 text-3xl mb-3" />,
        title: "Visa and Admission",
        text: "Studying abroad requires you to get a visa. At Reddys, we assist you with the course details and guide you to apply for a visa and prepare the related documents."
      },
      {
        icon: <FaHotel className="text-blue-700 text-3xl mb-3" />,
        title: "Accommodations",
        text: "Not surprisingly, travel and accommodations are two significant concerns when studying abroad. If you contact us, we will help you book flight tickets, find suitable accommodations near the university."
      }
    ];


    const metricsData = [
      {
        icon: <FaBriefcase className="text-4xl text-gray-400 mb-2" />,
        value: '11+',
        label: 'Career Counsellors'
      },
      {
        icon: <FaTrophy className="text-4xl text-gray-400 mb-2" />,
        value: '12+',
        label: 'Years Of Experience'
      },
      {
        icon: <FaGraduationCap className="text-4xl text-gray-400 mb-2" />,
        value: '270+',
        label: 'Enrolments'
      },
      {
        icon: <FaComments className="text-4xl text-gray-400 mb-2" />,
        value: '1200+',
        label: 'Testimonials'
      }
    ];


    const bullets = [
      "Most trusted abroad consultancy firm in India.",
      "With over 12 years of experience we provide the best educational solutions.",
      "We offer an affordable MBBS education and stay.",
      "Read our testimonials and clear your doubts, if any.",
      "Our active associates will guide you thoroughly to study MBBS abroad."
    ];

const mythsCards = [
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-4xl mb-3" />,
    title: "It is expensive",
    text: "Contrary to popular belief, studying MBBS abroad is often economical and sometimes even cheaper than studying in India. We are connected to some renowned universities with minimal tuition fees, which most students can afford."
  },
  {
    icon: <FaHome className="text-blue-600 text-4xl mb-3" />,
    title: "Expensive living",
    text: "Just like tuition fees, living and fooding abroad are pretty affordable for the students. Furthermore, we find you inexpensive lodging facilities at the best locations."
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-3" />,
    title: "Safety issues",
    text: "You don’t have to worry about safety concerns as study abroad is entirely secure in recent times. Plus, we will help you find MBBS seats in the safest counties as well."
  },
  {
    icon: <FaUniversity className="text-blue-600 text-4xl mb-3" />,
    title: "Fraud cases are there",
    text: "If you are afraid of being cheated, let us tell you that with Eklavya your money is safe. We have fair deals with authentic sources so that you can rest assured of no fraudulent activities."
  },
  {
    icon: <FaBook className="text-blue-600 text-4xl mb-3" />,
    title: "Quality of education is poor",
    text: "Quality of education abroad is often superior to that in India, with many universities recognized by NMC, WHO, and international medical bodies.",
  },
  {
    icon: <FaUserFriends className="text-blue-600 text-4xl mb-3" />,
    title: "Social Life",
    text: "Many students worry about making friends in a new country. However, universities often have vibrant student communities and clubs to help you connect with others."
  }
];


const About = () => {
  return (
    <div>
      <div  className='text-center text-2xl pt-10 text-black'>
        <p >
          ABOUT <span className='text-black font medium'> US </span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-black'>
          <p >Welcome to Reddys Overseas, your trusted partner in managing your healthcare needs conveniently and efficiently. At Reddys Overseas, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p> Reddys Overseas is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Reddys Overseas is here to support you every step of the way.</p>
          <b className=' text-black '>Our Vision</b>
          <p >Our vision at Reddys Overseas is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

    

    {/* contact us*/}
<div className="flex flex-col lg:flex-row gap-6 mt-5 mb-20">
  <div className="flex-1">
    <h2 className="text-xl font-bold mb-2">Why should you contact us?</h2>
    <p className="text-sm text-gray-700 mb-6">
      When you come to Reddys Overseas consultancy, we’ll give you multiple reasons to consult our counsellors for MBBS abroad. Without expert guidance you may get puzzled. Therefore, consult our faculties and pave the way for your future.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md p-6 hover:bg-gray-200 transition-all duration-300 cursor-pointer flex flex-col"
        >
          <div className="flex items-center gap-3 mb-2">
        {card.icon}
        <h3 className="font-semibold text-lg">{card.title}</h3>
      </div>
      <p className="text-sm">{card.text}</p>
    </div>
  ))}
</div>
  </div>
</div>

 {/* Stats + Text Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto mt-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {metricsData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-gray-200 shadow-md px-10 py-8 flex flex-col items-center"
              >
              {item.icon}
              <div className="text-xl font-bold mt-2 text-gray-900">{item.value}</div>
              <div className="mt-1 text-md text-gray-800 text-center">{item.label}</div>
            </div>
          ))}
        </div>
        {/* Text + Bullets */}
        <div className="flex-1 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-1 text-gray-800">No.1 MBBS Education Consultants</h2>
          <p className="mb-2 text-sm text-gray-800">
            Contact us unhesitatingly as we are perhaps the best MBBS educational counsellors that you can ever meet. Our honest efforts, valuable advice and fair guidelines will make your dreams come true!
          </p>
          <ul className="space-y-2 text-sm">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-700" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

          {/* Myths Section */}
<div className="my-16">
  <div className="text-center mb-6">
    <h2 className="text-xl md:text-3xl font-bold text-black mb-1">
      Myths about studying MBBS in abroad
    </h2>
    <div className="text-md text-gray-700">
      We are here to clear your doubts regarding studying MBBS abroad. Here are some common myths that we will debunk for you.
    </div>
  </div>
  <div className="grid md:grid-cols-3 gap-8 justify-items-center">
    {mythsCards.map((card, idx) => (
      <div key={idx} className="bg-white shadow hover:bg-gray-200 p-8 max-w-[350px] flex flex-col items-center text-center">
        {card.icon}
        <div className="font-semibold text-lg text-black mb-1">{card.title}</div>
        <div className="text-gray-700 text-sm">{card.text}</div>
      </div>
    ))}
  </div>
</div>   

</div>
)
}
export default About