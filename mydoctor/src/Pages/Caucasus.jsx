import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CaucasusImg from '../assets/Caucasus.jpg';

const importantLinks = [
  { label: 'Top Courses', color: 'text-orange-600', id: 'courses' },
  { label: 'Eligibility', color: 'text-orange-600', id: 'eligibility' },
  { label: 'Admission Procedure', color: 'text-orange-600', id: 'admission' },
  { label: 'Fees Structure', color: 'text-orange-600', id: 'fees' },
  { label: 'Documents Required', 
    color: 'text-orange-600', id: 'documents' },
];

const address = '73 Chargali St, Tbilisi, Georgia';

const Caucasus = () => {
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
          src={CaucasusImg}
          alt="Caucasus University"
          className="w-full md:w-1/2 h-64 md:h-80 object-cover"
        />
        <header className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3 leading-tight">
            Caucasus International University
          </h1>
          <p className="text-gray-800 text-sm">
            Established as a medical institute, Clinitsist, in 1995, Caucasus International University, ISO 9001: 2015 was granted to Caucasus International University on May 12, 2023, by TÜV NORD GROUP, one of the most reputable German licensing companies worldwide. To study the population of Caucasus International University, identify groups infected with COVID-19, assess the severity of the disease, and refer targets (hotline, ambulance crews, Covid clinics), the university also has a Telemedicine Centre. Additionally, the Telemedicine Centre provides recommendations regarding the anti-COVID-19 vaccine. Also, the department of scientific research at Caucasus International University provides technical expertise to the doctoral candidates for the submission of their research work on time and in a proper way.
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
          Address of Caucasus International University
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Location: </span>
          <span className="italic">{address}</span>
        </p>
      </section>

            {/* Top Courses Offered */}
        <section ref={sectionRefs.courses} id="courses" className="mb-2 scroll-mt-24">
        <h2 className="font-semibold text-lg text-black mb-3">Top Courses Offered</h2>
            <h4 className=" text-md text-black mt-2 mb-1">
            Caucasus International University has a wide range of programs including medicine. 
            The top courses offered at Caucasus International University
            </h4>
        </section>

        {/* Bachelor’s & Integrated Degree Programs */}
        <section ref={sectionRefs.programs} id="programs" className="mb-5 scroll-mt-24">
        <h3 className="font-medium text-md text-black mt-4 mb-2">Integrated Bachelor’s and Master’s Degree Programs – Full-Time Education</h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li> <strong className='font-semibold'>Medical Educational Program in English:</strong> It is a 6-year course, after which the student is awarded the degree of a Medical Doctor or that of an MD. The program focuses on pre-clinical training, clinical training, scientific research, and other university modules.</li>
            <li> <strong className='font-semibold'>PhD Full – Time Education:</strong> Students get to complete research work on various topics of their interest related to medicine, and dentistry. In 2022, the university received a grant to research chemical, nuclear, radiological, and biological safety methods.<br/>
             This is just one area of research that the institute works on. Guided by distinguished experts in their relative field, Caucasus International University provides all facilities to their students pursuing PhD. If the thesis is approved, the student receives a professional doctoral degree.</li>
        </ul>
        </section>

        {/* Facilities */}
        <section ref={sectionRefs.facilities} id="facilities" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Facilities at  the Caucasus International University</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li><strong className='font-semibold'>Library:</strong> The electronic library at Caucasus International University has subscriptions to scientific newspapers, and journals in Russian, Georgian, and English. Students can use such services for study and research purposes for free. It also has a server-integrated system of library for students to electronically access the library at any time they want</li>
            <li><strong className='font-semibold'>Dental Rooms:</strong> Students who pursue dentistry at Caucasus International University have the provision to practice in actual dental clinics provided by the university.</li>
            <li><strong className='font-semibold'>Legal Clinic:</strong> The Legal Clinic at Caucasus International University provides students with practical experience in legal matters, allowing them to work on real cases under the supervision of experienced faculty.</li>
            <li><strong className='font-semibold'>Laboratory:</strong> The university has modern laboratories equipped with the latest technology for research and practical training.</li>
            <li><strong className='font-semibold'>Hostel Facility:</strong>The hostels outside Caucasus International University are fully furnished, and have a 24-hour security system, central heating systems, 24-hour hot water, and hygienic food that is delivered to the hostel 3 times a day.</li>
            <li><strong className='font-semibold'>Student Cafeteria:</strong>Apart from the main canteen that has a seat for at least 300 students, Caucasus International University also has separate cafeterias, in and outside of the campus, for students to enjoy delicious snacks, while discussing ideas, or just having fun.</li>
            <li><strong className='font-semibold'>Sports & Recreation:</strong> Facilities for Volleyball, Football, Basketball, Throwball, Carrom, Badminton, Table Tennis, and Cricket.</li>
        </ul>
        </section>

        {/* Why Study MBBS */}
        <section ref={sectionRefs.whyMBBS} id="whyMBBS" className="mb-5 scroll-mt-24">
        <h2 className="font-semibold text-md text-black mb-3">Why Study MBBS at Tbilisi State Medical University?</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
            <li><strong className='font-semibold'>Globally Recognized Degree:</strong> Approved by WFME, WHO, ECFMG, GMC (UK), Medical Council of India, and European Commission of Education.</li>
            <li><strong className='font-semibold'>Wide Range & Scope:</strong> Opportunities in the healthcare industry, academia, and research across multiple fields.</li>
            <li><strong className='font-semibold'>Affordable Tuition:</strong> 5,000 – 6,500 Euros per year for MD; 2,500 – 3,500 Euros per year for bachelor programs.</li>
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
            typically ranges between <span className="font-bold">$5,000 – $6,500 per year</span>, depending on the program. 
            Additional costs for hostel, food, and living apply separately.
        </p>

        <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-gray-300">
            <thead className="bg-gray-100">
                <tr>
                <th className="text-center border border-gray-300 bg-gray-500 p-2">Caucasus International University</th>
                <th className="text-center border border-gray-300  bg-gray-500 p-2">Fees per Year</th>
                </tr>
            </thead>
            <tbody className='border border-gray-400 text-sm'>
                <tr>
                <td className="text-center border border-gray-400 p-2">Tuition Fees (EURO)</td>
                <td className="text-center border border-gray-400 p-2">5,800 EUR/ year</td>
                </tr>
                <tr>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">Hostel Fees (EURO)</td>
                <td className="text-center border border-gray-400 bg-gray-200 p-2"> 1,000 EUR/ year</td>
                </tr>
                <tr>
                <td className="text-center border border-gray-400 p-2">Tuition Fees (INR)</td>
                <td className="text-center border border-gray-400 p-2">₹5,20,032/ year</td>
                </tr>
                <tr>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">Hostel Fees (INR)</td>
                <td className="text-center border border-gray-400 bg-gray-200 p-2">₹86,017/ year</td>
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
            However, students may explore grants or loans from private institutions with guidance from Eklavya Overseas.
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

export default Caucasus;
