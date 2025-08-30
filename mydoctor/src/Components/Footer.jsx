import Doco from '../assets/Doco.png';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import { FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="text-black px-4 md:px-12 py-14 font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-0 gap-8">
        {/* About Us (left corner) */}
        <div className="flex-1 flex flex-col items-start md:items-start min-w-0 max-w-xs">
          <p className="text-lg font-sm mb-6 w-full pb-1">
            ABOUT US
          </p>
          <p className="mt-0 mb-6 text-sm text-black">
            Reddys Overseas Consultancy is a leading consultancy based in Hyderabad that caters MBBS abroad admissions throughout India.
          </p>
          <div className="text-xs text-black mb-3">
            <p className="mb-1 font-sm">REGISTERED OFFICE:</p>
            <p>Reddys Overseas Consultancy<br/>
            Namdhari Fresh Building,<br/>
            Gachnibowli,<br/>
            Hyderabad, Telangana - 502032</p>
          </div>
          <p className="mt-2 flex items-center gap-2 text-black hover:text-green-600">
            <FiPhone className="inline text-black hover:text-green-600 text-sm" />+91-8186994134
          </p>
          <p className="mt-0 flex items-center gap-2 text-black hover:text-green-600">
            <FiMail className="inline text-black hover:text-green-600 text-sm" />info@reddysoverseas.com
          </p>
        </div>

        {/* MBBS Abroad */}
        <div className="flex-1 flex flex-col items-center min-w-0">
          <p className="text-lg font-sm mb-6 w-full text-center pb-1">  
            MBBS IN ABROAD
          </p>
          <ul className="mt-0 space-y-1 text-sm text-black">
            <li> MBBS in Ukraine</li>
            <li> MBBS in Russia</li>
            <li> MBBS in Poland</li>
            <li> MBBS in Kazakhstan</li>
            <li> MBBS in USA</li>
            <li> MBBS in China</li>
            {/* Add further countries as in image */}
          </ul>
        </div>

        {/* Branches */}
        <div className="flex-1 flex flex-col items-center min-w-0">
          <p className="text-lg font-sm mb-6  w-full text-center pb-1">
            OUR BRANCHES
          </p>
          <ul className="mt-0 space-y-1 text-sm text-black gap-x-2">
            <li>New Delhi</li>
            <li>Itanagar</li>
            <li>Guwahati</li>
            <li>Patna</li>
            {/* Add remaining branches */}
          </ul>
        </div>

        {/* Gallery */}
        <div className="flex-1 flex flex-col items-center min-w-0">
          <p className="text-lg font-sm mb-6 w-full text-center pb-1">
            GALLERY
          </p>
          <div className="mt-0 grid grid-cols-2 gap-2">
            <img src={doc1} alt="Gallery" className="w-28 h-24 object-cover rounded" />
            <img src={doc2} alt="Gallery" className="w-28 h-24 object-cover rounded" />
            <img src={doc3} alt="Gallery" className="w-28 h-24 object-cover rounded" />
            <img src={doc4} alt="Gallery" className="w-28 h-24 object-cover rounded" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center min-w-0">
          <p className="text-lg font-sm mb-6 w-full text-center pb-1">
            QUICK LINKS
          </p>
          <ul className="space-y-1 mt-0 text-sm text-black">
            <li>Gallery</li>
            <li>FAQs</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Stay in Touch (right corner) */}
        <div className="flex-1 flex flex-col items-end md:items-end min-w-0 max-w-xs">
          <p className="text-lg font-sm mb-6 w-full text-center pb-1">
            STAY IN TOUCH
          </p>
          <p className="mt-0 text-black text-sm mb-3 text-start">
            Join our subscribers list to get the latest news, update and special offers delivered directly in your inbox.
          </p>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 mb-2 w-full bg-gray-200 text-black placeholder-gray-400 focus:outline-none"
            placeholder="Your E-mail Address"
          />
          <button className="text-center bg-green-700 hover:bg-green-500 text-white font-semibold py-2 px-7 mb-4 w-full">
            SUBMIT
          </button>
        </div>
      </div>
      {/* Footer bar */}
      <p className="pt-6 mt-10 text-center text-sm text-gray-900">
        ©2025 Reddys consultancy. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;