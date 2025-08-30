import { useNavigate } from "react-router-dom";
import Tbilisi from "../assets/Tbilisi.jpg";
import Caucasus from "../assets/Caucasus.jpg";
import SEU from "../assets/SEU.jpg";
import Akaki from "../assets/Akaki.jpg";
import Geomedi from "../assets/Geomedi.jpg";
import David from "../assets/David.jpg";
import Batumi from "../assets/Batumi.jpg";
import Ilia from "../assets/Ilia.jpg";
import Ivane from "../assets/Ivane.jpg";
import University from "../assets/University.jpg";

const countries = [
    {
        title: "Tbilisi University",
        description: "Grab admission in a globally recognized medical university in Tbilisi.",
        image: Tbilisi,
        path: "/universities/tbilisi"
    },
    {
        title: "Caucasus University",
        description: "Pursue your medical career in a top medical university in Georgia.",
        image: Caucasus,
        path: "/universities/caucasus"
    },
    {
        title: "SEU University",
        description: "Grab cost-effective education for MBBS in Georgia.",
        image: SEU,
        path: "/universities/seu"
    },
    {
        title: "Akaki University",
        description: "Find your ideal NMC and WHO approved university for MBBS in Georgia.",
        image: Akaki,
        path: "/universities/akaki"
    },
    {
      title: "Geomedi University",
      description: "Join the prestigious Geomedi University for your MBBS.",
      image: Geomedi,
      path: "/universities/geomedi"
    },
    {
      title: "David Tvildiani Medical University",
      description: "Join the prestigious David Tvildiani Medical University for your MBBS.",
      image: David,
      path: "/universities/david-tvildiani"
    },
    {
      title: "Batumi Shota Rustaveli State University",
      description: "Study at Batumi Shota Rustaveli State University for a bright medical career.",
      image: Batumi,
      path: "/universities/batumi"
    },
    {
      title: "Ilia State University",
      description: "Join the Ilia State University for a bright medical career.",
      image: Ilia,
      path: "/universities/ilia-state"
    },
    {
      title: "Ivane Javakhishvili Tbilisi State University",
      description: "Study at Ivane Javakhishvili Tbilisi State University for a bright medical career.",
      image: Ivane,
      path: "/universities/ivane-javakhishvili"
    },
    {
      title: "University of Georgia",
      description: "Join the University of Georgia for a bright medical career.",
      image: University,
      path: "/universities/university-of-georgia"
    },

];

const TopUniversities = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-8 px-2 md:px-10 lg:px-8">
      {/* Title and subtitle */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-2">
          Study MBBS <span className="text-black">In Georgia</span>
        </h1>
        <p className="text-sm md:text-sm text-gray-700">
          Get admission in one of the leading universities for MBBS in Georgia.
        </p>
      </div>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {countries.map((university, idx) => (
        <div key={idx} className="overflow-hidden flex flex-col group">
            {/* Image & badge */}
            <div className="relative cursor-pointer" onClick={() => navigate(university.path)}>
              <img
                  src={university.image}
                  alt={university.title}
                  className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              {/* <span
                className="absolute bottom-4 left-10 text-white text-xs px-3 py-1 font-small bg-green-600 rounded-full cursor-pointer"
                onClick={e => { e.stopPropagation(); navigate(university.path); }}
              >
                  Admissions Open
              </span> */}
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-md font-semibold text-gray-900 mb-1">{university.title}</h2>
              <p className="text-gray-700 text-sm mt-1 line-clamp-2">
                {university.description}
                {university.description.length > 40 && <span className="text-green-600">...more</span>}
              </p>
            </div> 
            {/* Apply Button below description, visible on card hover */}
            <button
                className="mt-4 bg-green-600 text-white px-6 py-2 font-semibold text-base 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ pointerEvents: 'auto' }}
                onClick={() => navigate(university.path)}
            >
                Apply now
            </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TopUniversities;
