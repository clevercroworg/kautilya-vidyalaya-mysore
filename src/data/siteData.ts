export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigationData: {
  topbar: {
    phones: string[];
    admissionLink: { label: string; href: string };
    paymentLink: { label: string; href: string };
  };
  mainMenu: NavItem[];
} = {
  topbar: {
    phones: ["9900038358", "+917090671299"],
    admissionLink: {
      label: "Admission Open 2027-28",
      href: "https://kautilya.schoolelement.in/enquiries",
    },
    paymentLink: {
      label: "Online Payment",
      href: "https://kautilya.schoolelement.in/auth/login",
    },
  },
  mainMenu: [
    { label: "Mandatory Disclosure", href: "/mandatory-public-disclosure" },
    {
      label: "Our School",
      href: "#",
      children: [
        { label: "About Us", href: "/about-us" },
        { label: "Chairman’s Desk", href: "/chairmans-desk" },
        { label: "Committee Members", href: "/committee-members" },
        { label: "Director & Principal Message", href: "/principals-message" },
        { label: "Teaching Faculty", href: "/teaching-faculty" },
        { label: "Events", href: "/events-gallery" },
        { label: "News & Circular", href: "/news-circular" },
      ],
    },
    {
      label: "Academics",
      href: "#",
      children: [
        { label: "What it means at Kautilya?", href: "/what-it-means-at-kautilya" },
        { label: "Co-Curricular Activities", href: "/co-curricular-activities" },
        { label: "Sports And Physical Education", href: "/sports-and-physical-education" },
        { label: "Life Skills", href: "/life-skills" },
        { label: "Result Graph", href: "/result-graph" },
      ],
    },
    { label: "Other Facilities", href: "/other-facilities" },
    {
      label: "Student Corner",
      href: "#",
      children: [
        { label: "Monthly Newsletter", href: "/monthly-newsletter" },
        { label: "Awards And Achievements", href: "/awards-and-achievements" },
        { label: "Alumni Forum", href: "/alumni-forum" },
      ],
    },
    {
      label: "Parents Corner",
      href: "#",
      children: [
        { label: "FAQs", href: "/faqs" },
        { label: "Parent Perspectives", href: "/parent-perspectives" },
        { label: "Fee Structure", href: "/fee-structure" },
        { label: "Brochure Download", href: "/brochure-download" },
      ],
    },
    { label: "Podcast", href: "/podcast" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

export const marqueeText =
  "Admissions for academic year 2027-28 are now open!! Contact us +919900038358, +917090671299 • Empowering young minds with value-based education • CBSE Affiliated • State-of-the-Art Science & Atal Tinkering Labs";

export const corePillars = [
  {
    title: "Academic year 2027-28",
    subtitle: "Admission Open",
    description:
      "Right education should help the student, not only to develop his capacities, but to understand his own highest interest.",
    image: "/images/kautilya-academic-pillars.jpg",
    cta: "Apply for Admission",
    href: "#admission-enquiry",
    badge: "Admissions 2027-28",
  },
  {
    title: "Balanced Schooling",
    subtitle: "Holistic Development",
    description:
      "Right balance – between academics, co-curricular and extracurricular activities. We foster a love for learning in every student.",
    image: "/images/kautilya-holistic-development.jpg",
    cta: "Explore Academics",
    href: "/what-it-means-at-kautilya",
    badge: "Balanced Learning",
  },
  {
    title: "Centre of Excellence",
    subtitle: "Award Winning",
    description:
      "Building 21st century skills & developing independent minded students that are ready for the world. Proud recipient of the Wipro Earthian School Award.",
    image: "/images/kautilya-sports-excellence.jpg",
    cta: "View Achievements",
    href: "/awards-and-achievements",
    badge: "Excellence",
  },
];

export const facilities = [
  {
    name: "Physics Lab",
    description: "Modern equipment for hands-on experimentation, analytical thinking, and scientific discovery.",
    image: "/images/facilities/kautilya-science-labs.webp",
    tag: "Practical Learning",
  },
  {
    name: "Atal Tinkering Lab",
    description: "Niti Aayog approved STEM workspace fostering robotics, 3D prototyping, and innovative thinking.",
    image: "/images/facilities/kautilya-atal-tinkering-lab.webp",
    tag: "STEM & Robotics",
  },
  {
    name: "Chemistry Lab",
    description: "Fully compliant safety-first laboratory for experiential chemical reactions and molecular studies.",
    image: "/images/facilities/kautilya-smart-classrooms.webp",
    tag: "Scientific Research",
  },
  {
    name: "Library & Resource Center",
    description: "Extensive repository of classical literature, science journals, digital media, and reference texts.",
    image: "/images/kautilya-sports-excellence.jpg",
    tag: "Knowledge Hub",
  },
  {
    name: "Biology Lab",
    description: "High-power microscopes, biological models, and herbarium specimens encouraging nature curiosity.",
    image: "/images/facilities/kautilya-digital-library.webp",
    tag: "Life Sciences",
  },
  {
    name: "Computer Lab",
    description: "High-speed networked computing lab equipped with coding software, design tools, and internet research.",
    image: "/images/kautilya-auditorium-hall.jpg",
    tag: "Digital Literacy",
  },
];

export const galleryEvents = [
  {
    title: "Colors Day Celebrations",
    category: "Campus Life",
    image: "/images/events/kautilya-annual-sports-meet.webp",
  },
  {
    title: "Science Display Exhibition",
    category: "Academics",
    image: "/images/events/kautilya-independence-day.webp",
  },
  {
    title: "Educational Trip To Singapore",
    category: "Global Exposure",
    image: "/images/events/kautilya-investiture-ceremony.webp",
  },
  {
    title: "Saamskrithika Parva 2023-24",
    category: "Cultural Fest",
    image: "/images/events/kautilya-yoga-day.webp",
  },
];

export const parentTestimonials = [
  {
    name: "Dr. Ramya",
    role: "Parent",
    image: "/images/testimonials/parent-dr-suresh-priya.webp",
    text: "I am really happy for choosing this school for my kids because they are not only becoming literates but also becoming educated there. Teachers do a wonderful job. Timely PTM's, co-curricular activities and involvement of every child in all tasks make it stand out.",
  },
  {
    name: "Mrs. Rani Nagabhushan Rao",
    role: "Parent",
    image: "/images/testimonials/parent-rajesh-meenakshi.webp",
    text: "Kautilya Vidyalaya name itself indicates that 'alaya' means temple in Sanskrit. Truly it is an Educational Temple in Mysuru. The dedication of teachers and individualized care given to each child is inspiring.",
  },
  {
    name: "Dr Pranavi K M.D (Ayu)",
    role: "Parent of Aadhya & Aarya (Grade 2)",
    image: "/images/testimonials/parent-venkatesh-murthy.webp",
    text: "We parents of Aadhya S & Aarya S studying in grade 2 are extremely happy with Kautilya school. The balanced curriculum, supportive environment, and focus on values make all the difference.",
  },
  {
    name: "Ramprasad A V",
    role: "Parent",
    image: "/images/testimonials/parent-dr-anitha-rao.webp",
    text: "We are keen on playing our part as parents in our collective endeavour of creating an empowering ecosystem for global citizens. Kautilya provides that strong foundation.",
  },
  {
    name: "Lieutenant Colonel Srinivasan S",
    role: "Parent & Army Officer",
    image: "/images/testimonials/guest-prof-chidananda-gowda.svg",
    text: "Kautilya Vidyalaya offers a truly balanced and enriching environment, giving equal importance to academics, sports, discipline, and moral character. Highly recommended!",
  },
  {
    name: "Soujanya G.K",
    role: "Parent",
    image: "/images/testimonials/guest-dr-someswara.svg",
    text: "We express our sincere gratitude for the positive influence the school has had on our son. The teachers are approachable and cultivate true self-confidence in every student.",
  },
];

export const alumniTestimonials = [
  {
    name: "Dr. Rohan M V",
    role: "MBBS (MIMS Mandya) • MD Radiology",
    image: "/images/alumni/dr-rohan-m-v-headshot.jpeg",
    text: "My five years at Kautilya Vidyalaya were truly amazing and filled with valuable learning experiences. The school helped me become independent, creative, confident, and good at sports, shaping me into a well-rounded individual. The skills and values I learned played an important role in helping me secure a government seat for MBBS. Today, I am proud to be a doctor, serving people and making a difference in their lives.",
  },
  {
    name: "Dr. Rohit M V",
    role: "MBBS (CIMS Chamarajanagar) • MD Radiology, Vydehi IMS",
    image: "/images/alumni/dr-rohit-m-v-headshot.jpeg",
    text: "My journey at Kautilya Vidyalaya has been one of the most memorable and enriching experiences of my life. The school gave me much more than academics—it helped me discover my strengths, build confidence, think independently, and develop the courage to take on new challenges. The encouragement from my teachers and the opportunities provided by the school helped me grow both personally and academically. Kautilya taught me the importance of discipline, hard work, creativity, and staying true to my goals. I am proud to be a Kautilya alumnus, and I will always cherish the values and experiences that have shaped the person I am today.",
  },
  {
    name: "Siri Bhim Rao Patil",
    role: "MBBS at AIMS, Bellur • CBSE Class X School Topper",
    image: "/images/alumni/siri-bhim-rao-patil.jpeg",
    text: "I studied at Kautilya Vidyalaya for my ninth and tenth grades, and those two years were truly memorable and enriching. The school not only focused on strengthening our academic foundation but also provided numerous opportunities to explore our interests and discover our strengths. What made my experience even more special was the constant support and encouragement from the teachers. I look back at my time at Kautilya with immense gratitude.",
  },
  {
    name: "Dr. Manish V",
    role: "MBBS, Medical Practitioner",
    image: "/images/alumni/alumni-ananya-sharma.jpeg",
    text: "From third to seventh grade, I had the privilege of studying at Kautilya Vidyalaya, and those years remain some of the most unforgettable of my life. The nurturing environment and dedicated teachers profoundly shaped my character and education. The excitement of annual sports days and the deep sense of belonging played a pivotal role in shaping who I am today.",
  },
  {
    name: "Tanushree R",
    role: "3rd year Computer Science, SJCE Mysuru",
    image: "/images/alumni/alumni-rohan-kulkarni.jpeg",
    text: "I am Tanushree R, currently in my 3rd year of Engineering in Computer Science at SJCE, Mysuru. I am forever grateful for the teachers and environment at Kautilya that encouraged technical inquiry, curiosity, and leadership.",
  },
  {
    name: "Dr. Spoorthi Rao",
    role: "Doctor & Alumna (2015 Batch)",
    image: "/images/alumni/alumni-sneha-hegde.jpeg",
    text: "As a 2015 pass-out student who joined Kautilya Vidyalaya in the 8th standard, I look back on my school years as the cornerstone of my academic journey. The values and discipline instilled here continue to guide my professional medical career.",
  },
];

export const guestTestimonials = [
  {
    name: "Sri G T Devegowda",
    role: "Former Minister of Higher Education",
    image: "/images/faculty/faculty-gayatri-devi.jpeg",
    text: "Graced us with his presence on the occasion. He spoke about the crucial importance of early holistic schooling and appreciated Kautilya Vidyalaya's exemplary standard of education in Mysuru.",
  },
  {
    name: "Dr. Y S R Murthy",
    role: "Former IAS Officer, Vice Chancellor at R.V. University",
    image: "/images/faculty/faculty-ramesh-bhat.jpeg",
    text: "Shared valuable insights with our students and faculty about visionary leadership, nation-building, and the pivotal role of schools in developing compassionate future leaders.",
  },
  {
    name: "Sri Shivakumar",
    role: "Former Mayor of Mysuru",
    image: "/images/faculty/faculty-prema-kumari.jpeg",
    text: "Inspired kids through his address about civic responsibility, community cleanliness, and building sustainable urban environments from childhood.",
  },
  {
    name: "Dr. Srinath & Mrs. Geetha Srinath",
    role: "Veteran Actor, 'Kala Ratna' Award Winner",
    image: "/images/faculty/faculty-manjunath-swamy.jpeg",
    text: "Mesmerised the audience with his delightful address, emphasizing how cultural arts and expressive confidence complement academic excellence.",
  },
  {
    name: "Smt. Shamala D D IRS",
    role: "Joint Commissioner of Income Tax Department",
    image: "/images/faculty/faculty-deepa-n.jpeg",
    text: "Enlightened us with her simple, down-to-earth advice to parents and teachers on nurturing integrity, resilience, and curiosity in children.",
  },
  {
    name: "Major Satheesha D",
    role: "Indian Army Officer",
    image: "/images/faculty/faculty-anand-kumar.jpeg",
    text: "It is indeed a matter of great pride visiting Kautilya Vidyalaya on the occasion of Independence Day. The patriotism, discipline, and energy among students is truly commendable.",
  },
  {
    name: "Dr. Rajendra K.V., IAS",
    role: "District Magistrate & Deputy Commissioner",
    image: "/images/faculty/faculty-sushma-rao.jpeg",
    text: "Addressed students regarding healthy digital habits and urged parents and educators to support offline physical sports and creative play.",
  },
];

export const contactInfo = {
  address: "No 9/1, 13th Main, J Block, Kanakadasa Nagar, Dattagalli 3rd Stage, Mysuru, Karnataka 570033",
  affiliationNo: "830193",
  schoolCode: "45158",
  phones: [
    { label: "+91 70906 71299", href: "tel:+917090671299", note: "Office Desk" },
    { label: "+91 99000 38358", href: "tel:+919900038358", note: "Admissions" },
    { label: "0821 - 2460266", href: "tel:08212460266", note: "Reception" },
  ],
  emails: [
    { label: "enquiry@kautilyavidyalaya.edu.in", href: "mailto:enquiry@kautilyavidyalaya.edu.in", note: "General Helpdesk" },
    { label: "admissions@kautilyavidyalaya.edu.in", href: "mailto:admissions@kautilyavidyalaya.edu.in", note: "Admissions Desk" },
  ],
  whatsapp: "https://wa.me/919900038358",
  youtube: "https://www.youtube.com/@kautilya_vidyalaya_official",
  instagram: "https://www.instagram.com/kautilya_vidyalaya_official/",
  facebook: "https://www.facebook.com/kautilyavidyalayamysore/",
  googleMapsUrl: "https://maps.google.com/?q=Kautilya+Vidyalaya+Group+of+Institutions+Mysore",
};

