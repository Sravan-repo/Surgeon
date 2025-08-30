import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TbilisiImg from '../assets/Tbilisi.jpg';

const importantLinks = [
  { label: 'Top Courses', color: 'text-orange-600', id: 'courses' },
  { label: 'Eligibility', color: 'text-orange-600', id: 'eligibility' },
  { label: 'Admission Procedure', color: 'text-orange-600', id: 'admission' },
  { label: 'Fees Structure', color: 'text-orange-600', id: 'fees' },
  { label: 'Documents Required', 
    color: 'text-orange-600', id: 'documents' },
];

const address = 'Vazha-Pshavela Ave. 33, 0186 Tbilisi, Georgia';

const Tbilisi = () => {
  const navigate = useNavigate();

  // Refs for smooth scroll navigation
  const sectionRefs = {
    courses: useRef(null),
    eligibility: useRef(null),
    admission: useRef(null),
    fees: useRef(null),
    documents: useRef(null),
  };

  const handleScroll = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-12 mt-8">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row mb-12 gap-8 items-center">
        <img
          src={TbilisiImg}
          alt="Tbilisi University"
          className="w-full md:w-1/2 h-64 md:h-80 object-cover"
        />
        <header className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3 leading-tight">
            Tbilisi State Medical University
          </h1>
          <p className="text-sm text-gray-800">
           Tbilisi State Medical University, being more than a century old, has upheld global standards of medical education since its establishment in 1930. The university is best known for its transparent management, high-quality medical education, democratic governance principles, and complete academic freedom for the students. Tbilisi State Medical University has a hospital, clinics, a scientific research institute, a laboratory, pathology diagnostic labs, a well-equipped library, and highly esteemed faculty. The e-library at Tbilisi State Medical University has the facility to request books online by filling out a form, and access to various e-databases, including LearnOutLoud, and ProQuest Ebook Central, that serve as an important resource for medical students to gain a proper understanding of the latest updates in the field of medicine.
            With modern clinics, libraries, labs, and research centers, Tbilisi State Medical University is one of Georgia’s top medical institutions offering comprehensive education and training.
          </p>
        </header>
      </div>

      {/* Important Links */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-black rounded-full mb-4">Admissions
          <span className="text-green-600 font-semibold"> Open</span></h2>
        <ul className="flex flex-wrap gap-4">
          {importantLinks.map((link, i) => (
            <li
              key={i}
              className={`${link.color} cursor-pointer font-medium border px-3 py-1 hover:bg-gray-100 hover:opacity-90 transition`}
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Address */}
      <section className="mb-5 text-sm ">
        <h2 className="font-semibold text-md text-black mb-2">
          Address of Tbilisi State Medical University
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Location: </span>
          <span className="italic">{address}</span>
        </p>
      </section>

            {/* Top Courses Offered */}
        <section ref={sectionRefs.courses} id="courses" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Top Courses Offered</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Pharmacy Bachelor’s Program: A 4-year bachelor’s degree course in English.</li>
            <li>Physical Medicine and Rehabilitation: A 4-year bachelor’s degree in English.</li>
            <li>USMD (American MD): A 6-year integrated program (360 ECTS credits). A joint program with Emory University, Atlanta (USA).</li>
            <li>Educational Program for Medical Doctors (MD): 6-year full-time English program, leading to an MD degree.</li>
            <li>Dental Medicine (DDM): A 5-year program leading to a DDM degree.</li>
        </ul>
        </section>

        {/* Bachelor’s & Integrated Degree Programs */}
        <section ref={sectionRefs.programs} id="programs" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Academic Programs in English</h2>

        <h3 className="font-medium text-md text-black mt-3 mb-2">Bachelor’s Degree Programs – Full-Time Education</h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Pharmacy Bachelor’s Program: A 4-year program taught in English.</li>
            <li>Physical Medicine and Rehabilitation: A 4-year English-taught bachelor’s program.</li>
        </ul>

        <h3 className="font-medium text-md text-black mt-4 mb-2">Integrated Bachelor’s and Master’s Degree Programs – Full-Time Education</h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li>USMD (American MD): 6-year program requiring 360 ECTS credits, jointly organized by Tbilisi State Medical University & Emory University School of Medicine (Atlanta, USA).</li>
            <li>Educational Program for Medical Doctors (MD): A 6-year English program granting an MD degree.</li>
            <li>Dental Medicine (DDM): A 5-year professional program awarding a DDM upon completion.</li>
        </ul>
        </section>

        {/* Facilities */}
        <section ref={sectionRefs.facilities} id="facilities" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Facilities at TSMU</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li><strong className='font-semibold'>Library:</strong> Access to e-resources such as Scientific Databases, Medical Videos/E-books, NEJM, PubMed, ScienceDirect, LearnOutLoud, and CDC image libraries.</li>
            <li><strong className='font-semibold'>Exchange Programs:</strong> 1-month exchange program with universities in Egypt, Turkey, Germany, Ukraine, Hungary, and Serbia.</li>
            <li><strong className='font-semibold'>Clubs & Associations:</strong> Scientific Society of Students, EMSA, IFMSA, EDSA, EPSA, plus student-run clubs.</li>
            <li><strong className='font-semibold'>University Clinics:</strong>
            <ul className="list-disc ml-5 space-y-1">
                <li>TSMU First University Clinic</li>
                <li>TSMU & Ingorokva High Medical Technology University Clinic</li>
                <li>TSMU G. Zhvania Pediatric Academic Clinic</li>
                <li>TSMU A. Urushadze Dental Clinic</li>
                <li>TSMU #1 Dental Clinic</li>
            </ul>
            </li>
            <li><strong className='font-semibold'>Laboratory:</strong> TSMU Laboratory of Teaching, Scientific and Diagnostic in Pathology with modern research software & tools.</li>
            <li><strong className='font-semibold'>Hostel Facility:</strong> No on-campus hostel. Private apartment (200 – 250 Euros/month).</li>
            <li><strong className='font-semibold'>Sports & Recreation:</strong> Facilities for Volleyball, Football, Basketball, Throwball, Carrom, Badminton, Table Tennis, and Cricket.</li>
        </ul>
        </section>

        {/* Why Study MBBS */}
        <section ref={sectionRefs.whyMBBS} id="whyMBBS" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Why Study MBBS at Tbilisi State Medical University?</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li><strong className='font-semibold'>Globally Recognized Degree:</strong> Approved by WFME, WHO, ECFMG, GMC (UK), Medical Council of India, and European Commission of Education.</li>
            <li><strong className='font-semibold'>Wide Range & Scope:</strong> Opportunities in the healthcare industry, academia, and research across multiple fields.</li>
            <li><strong className='font-semibold'>Affordable Tuition:</strong> 6,000 – 8,000 Euros per year for MD; 2,500 – 3,500 Euros per year for bachelor programs.</li>
            <li><strong className='font-semibold'>Training & Exchange Programs:</strong> Clinical training, internships, and international student exchange.</li>
            <li><strong className='font-semibold'>Esteemed Faculty & Management:</strong> Academic council-driven system ensures top teaching quality.</li>
            <li><strong className='font-semibold'>Research & Fieldwork:</strong> Research Ethics Committee supports advanced biomedical & neurological studies.</li>
            <li><strong className='font-semibold'>Unmatched Facilities:</strong> Student clubs, global associations, and modern infrastructure.</li>
            <li><strong className='font-semibold'>Schengen Visa:</strong> Georgian Schengen visa allows travel across Schengen destinations.</li>
        </ul>
        </section>

        {/* Career Scope */}
        <section ref={sectionRefs.scope} id="scope" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Career Scope After Graduation</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li><strong className='font-semibold'>American MD Program:</strong> Career as Medical Practitioner, Junior Doctor, Academic scientific researcher.</li>
            <li><strong className='font-semibold'>Educational Program for Medical Doctors:</strong> Employment in hospitals, clinics, and international research institutions.</li>
            <li><strong className='font-semibold'>Dental Medicine (DDM):</strong> Work as Dentist, Junior Dentist, or Academic researcher.</li>
            <li><strong className='font-semibold'>Bachelor of Pharmacy:</strong> Work in healthcare systems, pharma companies, research institutes, and medical equipment facilities.</li>
            <li><strong className='font-semibold'>Physical Medicine & Rehabilitation:</strong> Jobs in rehabilitation hospitals, wellness centers, sports rehabilitation clinics, schools, and community-based rehab programs.</li>
        </ul>
        </section>

      {/* Eligibility */}
     <section ref={sectionRefs.eligibility} id="eligibility" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Eligibility</h2>

        {/* Qualification */}
        <h3 className="font-semibold text-sm text-black mb-2">Qualification</h3>
        <p className="text-gray-700 text-sm mb-4">
            The applicant must have a <span className="font-bold">high school diploma (12th grade)</span>, preferably 
            in the science stream, with at least <span className="font-bold">60% marks</span>.  
            Alternatively, they should have passed the <span className="font-bold">Unified National Admission Exam</span> 
            with at least <span className="font-bold">85% in English</span> and 
            <span className="font-bold"> 75% in Biology, Chemistry, Physics, and Mathematics</span>.
        </p>

        {/* Entrance Exam */}
        <h3 className="font-semibold text-sm text-black mb-2">Entrance Exam</h3>
        <p className="text-gray-700 text-sm mb-4">
            Tbilisi State Medical University does not conduct a written entrance exam. 
            Instead, applicants attend an <span className="font-bold">online interview (via Zoom)</span> 
            to assess English proficiency and motivation.  
            <span className="font-bold">Indian students</span> are required to submit their 
            <span className="font-bold"> NEET certificate</span>.
        </p>

        {/* Language Proficiency */}
        <h3 className="font-semibold text-sm text-black mb-2">Language Proficiency</h3>
        <p className="text-gray-700 text-sm mb-2">
            A minimum <span className="font-bold">B1 level of English</span> is required. Applicants can provide:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            <li>MOI (Medium of Instruction Certificate)</li>
            <li>TOEFL Certificate</li>
            <li>IELTS Certificate</li>
            <li>CPE (Cambridge Proficiency Exam)</li>
            <li>Other equivalent B1-level English proficiency certificates</li>
        </ul>

        {/* Documents */}
        <h3 className="font-semibold text-sm text-black mb-2">Documents Required</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            <li>Valid Passport</li>
            <li>High School Certificate</li>
            <li>English language proficiency proof (B1 level or equivalent)</li>
        </ul>

        {/* Financials */}
        <h3 className="font-semibold text-sm text-black mb-2">Funds</h3>
        <p className="text-gray-700 text-sm mb-4">
            A minimum <span className="font-bold">security deposit</span> is required by the
            Georgian Ministry of Education. Guidance on this will be provided through
            <span className="font-bold"> Reddys Overseas</span>.
        </p>

        {/* Application Timeline */}
        <h3 className="font-semibold text-sm text-black mb-2">Application Timeline</h3>
        <p className="text-gray-700">
            There are two application intakes each year:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
            <li><span className="font-bold">Fall Intake:</span> June – October</li>
            <li><span className="font-bold">Spring Intake:</span> December – February</li>
        </ul>
        </section>

      {/* Admission Procedure */}
      <section
        ref={sectionRefs.admission}
        id="admission"
        className="mb-5 scroll-mt-24"
        >
        <h2 className="font-semibold text-lg text-black mb-3">Admission Procedure</h2>
        <p className="mb-2 text-sm text-gray-900">
            A step-by-step process must be followed to apply to Tbilisi State Medical University so that there is a maximum chance of approval of the application form.<br />
            Professionals at Reddys Overseas will ensure that everything is completed on time. Below is a guide to clarify the process of admission:
        </p>
        <p className="mb-2 text-sm text-gray-900">
            Reddys Overseas will be by your side while you apply to Tbilisi State Medical University. We know the process of filling out the application forms and have a list of official email addresses where the application form must be emailed.
        </p>
        <ol className="list-decimal ml-5 text-sm mb-2 text-gray-900 space-y-2">
            <li>Reddys Overseas will provide you with a list of documents that need to be sent with the application.</li>
            <li>Once the application form and documents are emailed, an online interview will be scheduled by the university. Reddys Overseas will keep track of the emails for the same.</li>
            <li>While awaiting the date of the online interview, Reddys Overseas will help you prepare, and clear the required exams and English proficiency tests which is a mandatory requirement.</li>
            <li>After submitting the proficiency test certificate and appearing for the online interview, the university will send you an approval letter. Reddys Overseas will attach the approval letter to your Schengen Visa application to speed up the process.</li>
            <li>The visa will arrive in a maximum of 45 days, after which experts will assist you in getting HRD and apostille completed on your documents.</li>
            <li>In the last step, you will receive a list of private and shared accommodations near Tbilisi State Medical University. You can choose one that matches your requirements and budget.</li>
        </ol>
        </section>

      {/* Fees Structure */}
        <section ref={sectionRefs.fees} id="fees" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-lg text-black mb-3">Fees Structure</h2>

        {/* Tuition Fees */}
        <p className="text-gray-700 text-sm mb-3">
            The tuition fee for MBBS at <span className="font-bold">Tbilisi State Medical University (TSMU)</span> 
            typically ranges between <span className="font-bold">$5,000 – $8,000 per year</span>, depending on the program. 
            Additional costs for hostel, food, and living apply separately.
        </p>

        <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-gray-300">
            <thead className="bg-gray-100">
                <tr>
                <th className="text-center border border-gray-300 bg-gray-500 p-2">Details</th>
                <th className="text-center border border-gray-300  bg-gray-500 p-2">Fees per Year</th>
                </tr>
            </thead>
            <tbody className='border border-gray-400 text-sm'>
                <tr>
                <td className="text-center border border-gray-400 p-2">Tuition Fees (USD)</td>
                <td className="text-center border border-gray-400 p-2">8,000 USD/ year</td>
                </tr>
                <tr>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">Hostel Fees (USD)</td>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">3,000 USD/ year</td>
                </tr>
                <tr>
                <td className="text-center border border-gray-400 p-2">Tuition Fees (INR)</td>
                <td className="text-center border border-gray-400 p-2">₹6,93,532/ year</td>
                </tr>
                <tr>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">Hostel Fees (INR)</td>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">₹2,60,170/ year</td>
                </tr>
            </tbody>
            </table>
        </div>

        <p className="text-xs text-gray-600 italic mb-6">
            *Note: The fee shown in INR is subject to exchange rate fluctuations and changes by the 
            university without prior notice. Please check real-time rates while applying.
        </p>

        {/* Accreditations */}
        <h3 className="font-semibold text-sm text-black mb-2">Accreditations</h3>
        <p className="text-gray-700 text-sm mb-5">
            TSMU is recognized globally by organizations like the <span className="font-bold">World Federation for Medical Education</span>, 
            <span className="font-bold"> ECFMG</span>, <span className="font-bold">WHO</span>, <span className="font-bold">European Commission of Education</span>, 
            <span className="font-bold">Medical Council of India (MCI)</span>, and the <span className="font-bold">UK General Medical Council (GMC)</span>.
        </p>

        {/* University Library */}
        <h3 className="font-semibold text-sm text-black mb-2">University Library</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-5">
            <li>Access to over 50,000 podcasts and videos via LearnOutLoud.com</li>
            <li>Medical ebooks & video archives</li>
            <li>70,000+ medical history images from the NLM and CDC</li>
            <li>Russian scientific database via eu and MedicineNet</li>
            <li>Weekly publications like <span className="font-bold">The New England Journal of Medicine (NEJM)</span></li>
            <li>Scientific resources like <span className="font-bold">PubMed</span> and <span className="font-bold">ScienceDirect</span></li>
        </ul>

        {/* Attached Hospitals */}
        <h3 className="font-semibold text-sm text-black mb-2">Attached Hospitals</h3>
        <p className="text-gray-700 mb-3 text-sm">TSMU operates 5 dedicated clinics for student internships & practical training:</p>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
            <li>TSMU First University Clinic</li>
            <li>Ingorokva High Medical Technology University Clinic</li>
            <li>G. Zhvania Pediatric Academic Clinic</li>
            <li>A. Urushadze Dental Clinic</li>
            <li>TSMU #1 Dental Clinic</li>
        </ul>

        {/* Sports & Recreation */}
        <h3 className="font-semibold text-msm text-black mb-2">Sports & Recreational Activities</h3>
        <p className="text-gray-700 text-sm mb-2">
            The Clinical Center of Sports Medicine and Rehabilitation (est. 2008) promotes both physical and 
            mental well-being of students. Popular sports and activities include:
        </p>
        <ul className="list-disc text-sm list-inside text-gray-700 mb-5 grid grid-cols-2 sm:grid-cols-3 gap-1">
            <li>Football</li>
            <li>Volleyball</li>
            <li>Basketball</li>
            <li>Cricket</li>
            <li>Badminton</li>
            <li>Table Tennis</li>
            <li>Throwball</li>
            <li>Carrom Board</li>
        </ul>
        <p className="text-gray-700 text-sm mb-5">
            In addition, students can participate in cultural events, student unions, visit museums, and explore city landmarks.
        </p>

        {/* Accommodation */}
        <h3 className="font-semibold text-sm text-black mb-2">Accommodation / Hostel Facilities</h3>
        <p className="text-gray-700 text-sm mb-5">
            Currently, TSMU does not provide on-campus hostels. However, students can rent private apartments 
            (<span className="font-bold">200 – 250 EUR/month</span>) or shared flats close to the campus. 
            Meals are also available at nearby cafes/restaurants or can be delivered (~<span className="font-bold">150 – 200 EUR/month</span>).
        </p>

        {/* Scholarships */}
        <h3 className="font-semibold text-sm text-black mb-2">Scholarships</h3>
        <p className="text-gray-700 text-sm">
            TSMU does not directly offer scholarships for bachelor’s and master’s students. 
            However, students may explore grants or loans from private institutions with guidance from Reddys Overseas.
        </p>
        </section>

      {/* Documents Required */}
        <section ref={sectionRefs.documents} id="documents" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Documents Required</h2>
        <p className="text-gray-700 mb-3 text-sm">
            A checklist of documents will be provided by experts at Eklavya Overseas based on
            the specific course that you are applying for. The mandatory supplementary documents
            required by Tbilisi State Medical University are:
        </p>
        <ul className="list-disc ml-5 text-gray-700 text-sm space-y-2">
            <li>Valid Passport</li>
            <li>10th & 12th Marksheet or Equivalent</li>
            <li>Birth Certificate</li>
            <li>Passport-size Photographs</li>
            <li>Medical Fitness Certificate</li>
            <li>12th Marksheet</li>
            <li>University Application Form</li>
            <li>A Valid National ID or Passport</li>
            <li>Academic Record of Transcript (10, 11, 12)</li>
            <li>2-3 Letters of Recommendation</li>
            <li>Personal Statement of Purpose</li>
            <li>5-6 Photos (Passport size, colored)</li>
            <li>Administrative tax (25 Euros)</li>
            <li>Medical certificate of physical fitness</li>
            <li>NEET Certificate</li>
            <li>Certificate of excellent mental health certified by a psychiatrist</li>
            <li>B1 level English proficiency test scores</li>
            <li>Financial Statements</li>
            <li>Visa-related Documents</li>
        </ul>
        </section>

        {/* Ranking */}
        <section ref={sectionRefs.ranking} id="ranking" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Ranking of Tbilisi State Medical University</h2>
        <p className="text-gray-700 text-sm">
            Tbilisi State Medical University ranks <strong>4th in Georgia</strong> and falls under
            the rank of the top <strong>4,000 universities in the world</strong> for medical studies.
        </p>
        </section>

        {/* Training & Guest Lecturers */}
        <section ref={sectionRefs.training} id="training" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Training & Guest Lecturers</h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
            <li>Training is carried out at TSMU Laboratory of Teaching, Scientific and Diagnostic in Pathology in collaboration with students and teaching staff.</li>
            <li>Modern computer labs equipped with latest research software.</li>
            <li>Guest lectures, seminars, and a 1-month exchange program in Egypt, Turkey, Germany, Ukraine, Hungary, and Serbia.</li>
        </ul>
        </section>

        {/* Campus Life */}
        <section ref={sectionRefs.campusLife} id="campusLife" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Campus Life</h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
            <li>Multiple student clubs and associations supported by TSMU.</li>
            <li>Affiliations with global medical bodies for student participation.</li>
            <li>Training at different levels through university clinics and exchange programs.</li>
            <li>Wide range of academic, cultural, and social activities making student life vibrant at TSMU.</li>
        </ul>
        </section>

        {/* Cost of Living */}
        <section ref={sectionRefs.cost} id="cost" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Cost of Living in Tbilisi</h2>
        <p className="text-gray-700 text-sm mb-3">
            On average, students spend around <strong>600 – 700 Euros per month</strong>, 
            which includes rent, food, travel, and other activities. Shared accommodations 
            can lower the cost to <strong>500 – 600 Euros per month</strong>.
        </p>
        <ul className="list-disc ml-5 text-gray-700 text-sm space-y-2">
            <li>Shared hostel outside the campus: 100 – 150 Euros/month</li>
            <li>Private one-bedroom apartment: 300 – 350 Euros/month</li>
            <li>Food: 200 – 250 Euros/month</li>
            <li>Transport: 50 – 100 Euros/month</li>
            <li>Miscellaneous expenses: 50 – 100 Euros/month</li>
        </ul>
        </section>

        {/* About Tbilisi */}
        <section ref={sectionRefs.about} id="about" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">About Tbilisi – Capital of Georgia</h2>
        <p className="text-gray-700 text-sm">
            Tbilisi, the political, cultural, and economic capital of Georgia, is rich in history 
            and modern attractions. From vibrant nightlife to museums, Tbilisi caters to everyone’s 
            interests. The city is home to the famous <strong>17th-century ancient baths</strong> 
            powered by natural hot springs, along with stunning Roman-era architecture. 
            With its colorful streets, historic buildings, and lively culture, Tbilisi is 
            one of the most exciting student destinations to explore while studying in Georgia.
        </p>
        </section>

    </div>
  );
};

export default Tbilisi;
