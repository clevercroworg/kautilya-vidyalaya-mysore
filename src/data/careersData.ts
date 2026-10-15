export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  qualification: string;
  openingsCount: number;
  badge?: string;
  description: string;
  keyResponsibilities: string[];
  requirements: string[];
  postedDate: string;
}

export const CAREER_DEPARTMENTS = [
  "All Openings",
  "Kindergarten",
  "Primary (PRT)",
  "Middle & High School (TGT)",
  "Senior Secondary (PGT)",
  "Sports & Physical Ed",
  "STEM & Innovation",
  "Administration & Support",
] as const;

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "kg-montessori-teacher",
    title: "Pre-Primary / Kindergarten Teacher (NTT / Montessori)",
    department: "Kindergarten",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "1 – 4 Years",
    qualification: "Diploma in Early Childhood Education (NTT) / Montessori Certification / Any Graduate",
    openingsCount: 3,
    badge: "Actively Hiring",
    description:
      "We are seeking warm, compassionate, and enthusiastic educators who love introducing pre-schoolers to phonics, language play, sensory discovery, and joyful early learning.",
    keyResponsibilities: [
      "Deliver lively activity-based learning in phonics, rhymes, storytelling, and early numeracy.",
      "Cultivate emotional security, classroom etiquette, and positive social interaction.",
      "Design creative art, sensory crafts, and celebration themes for Little Steps kindergarteners.",
      "Maintain active communication with parents regarding milestones and habit formation.",
    ],
    requirements: [
      "Fluency in spoken and written English with a pleasant, patient disposition.",
      "Certified in NTT, Early Childhood Education (ECE), or AMI Montessori training.",
      "Experience handling children aged 2.5 to 5.5 years in a structured preschool/CBSE school.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "prt-english-social",
    title: "Primary Teacher (PRT) – English & Social Studies",
    department: "Primary (PRT)",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "2 – 5 Years",
    qualification: "B.A / M.A in English or History/Geography with B.Ed (CTET/KTET preferred)",
    openingsCount: 2,
    badge: "New Opening",
    description:
      "Passionate primary educators to foster rich vocabulary, expressive writing, reading habits, and foundational understanding of society and nature in Grades 1 to 5.",
    keyResponsibilities: [
      "Plan and execute child-centric lessons aligned with CBSE guidelines and NEP 2020.",
      "Encourage public speaking, vocabulary acquisition, and creative writing in primary learners.",
      "Organize role-plays, quizzes, and inter-house cultural presentations.",
      "Track individual progress and provide targeted remedial support.",
    ],
    requirements: [
      "Bachelor's / Master's degree in relevant discipline with B.Ed.",
      "Strong command over English pronunciation, diction, and classroom engagement.",
      "Minimum 2 years of teaching experience in a recognized CBSE / ICSE school.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "prt-math-evs",
    title: "Primary Teacher (PRT) – Mathematics & EVS",
    department: "Primary (PRT)",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "2 – 5 Years",
    qualification: "B.Sc / M.Sc in Mathematics / Science with B.Ed",
    openingsCount: 2,
    badge: "Actively Hiring",
    description:
      "Dynamic educators capable of demystifying mathematical concepts through manipulatives, mental math strategies, and practical environmental science experiments.",
    keyResponsibilities: [
      "Teach basic numeracy, geometry, fractions, and practical science through experiential learning.",
      "Use our campus gardens and science corners to teach environmental conservation.",
      "Prepare young students for intra-school Math Olympiads and science exhibitions.",
    ],
    requirements: [
      "B.Sc / M.Sc with B.Ed in Mathematics or Natural Sciences.",
      "Ability to make mathematics interactive and fear-free for primary school students.",
      "Comfort with digital classroom technology and smart interactive panels.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "tgt-mathematics",
    title: "Trained Graduate Teacher (TGT) – Mathematics",
    department: "Middle & High School (TGT)",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "3 – 6 Years",
    qualification: "B.Sc / M.Sc in Mathematics with B.Ed (CTET qualified preferred)",
    openingsCount: 2,
    badge: "Urgent Requirement",
    description:
      "Dedicated mathematics instructor for Grades 6 to 10 with deep subject mastery, clarity of logic, and proven ability to prepare students for CBSE Board examinations.",
    keyResponsibilities: [
      "Teach secondary school mathematics (algebra, geometry, coordinate geometry, trigonometry, statistics).",
      "Develop problem-solving speed and analytical reasoning among students.",
      "Mentor high-achievers for competitive Olympiads and guide students needing remedial support.",
      "Design rigorous assessments, sample papers, and board exam preparatory mock tests.",
    ],
    requirements: [
      "Post Graduate or Graduate in Mathematics with B.Ed from a recognized university.",
      "Minimum 3 years of demonstrated success teaching Grades 8 to 10 in CBSE schools.",
      "In-depth familiarity with CBSE marking schemes and latest question paper patterns.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "tgt-science-physics-chem",
    title: "Trained Graduate Teacher (TGT) – Science (Physics / Chemistry)",
    department: "Middle & High School (TGT)",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "3 – 6 Years",
    qualification: "M.Sc / B.Sc in Physics or Chemistry with B.Ed",
    openingsCount: 2,
    badge: "Actively Hiring",
    description:
      "Hands-on science teacher who leverages our state-of-the-art physics, chemistry, and STEM labs to connect theoretical laws with everyday physical phenomena.",
    keyResponsibilities: [
      "Conduct regular physics and chemistry lab practicals with strict adherence to safety protocols.",
      "Deliver conceptual clarity across mechanics, electricity, chemical reactions, and periodic trends.",
      "Guide students in annual science exhibitions, ATL innovation projects, and scientific paper writing.",
    ],
    requirements: [
      "Degree in Physics or Chemistry with B.Ed.",
      "Hands-on laboratory competence and ability to demonstrate experiments safely.",
      "Passion for research-driven learning and mentoring future scientists.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "tgt-languages-kannada-hindi",
    title: "TGT – Languages (Kannada & Hindi)",
    department: "Middle & High School (TGT)",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "2 – 5 Years",
    qualification: "B.A / M.A in Kannada or Hindi with B.Ed",
    openingsCount: 2,
    badge: "Open Position",
    description:
      "Dedicated language scholars committed to instilling deep linguistic accuracy, creative writing, poetry recital, and cultural appreciation among students.",
    keyResponsibilities: [
      "Teach Kannada or Hindi as second/third languages according to the CBSE syllabus.",
      "Cultivate student participation in debate competitions, essay writing, and cultural festivals.",
      "Improve reading comprehension, grammar fundamentals, and handwriting.",
    ],
    requirements: [
      "Post-graduation or Graduation in Kannada / Hindi Literature with B.Ed.",
      "Strong grammatical foundation and ability to motivate students in language learning.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "pgt-physics-chemistry",
    title: "Post Graduate Teacher (PGT) – Physics / Chemistry",
    department: "Senior Secondary (PGT)",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "4 – 8 Years",
    qualification: "M.Sc in Physics or Chemistry with B.Ed",
    openingsCount: 2,
    badge: "Senior Faculty",
    description:
      "Senior faculty members with stellar board exam records and deep pedagogy to guide secondary students in CBSE coursework and competitive foundation.",
    keyResponsibilities: [
      "Teach senior secondary physics/chemistry with focus on core conceptual rigor.",
      "Conduct advanced laboratory investigations and viva preparations.",
      "Provide guidance for competitive entrance examination foundations (NEET/JEE).",
    ],
    requirements: [
      "M.Sc with B.Ed from a reputable university.",
      "Proven track record of mentoring students toward high percentiles in Board examinations.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "sports-swimming-coach",
    title: "Physical Education Teacher & Swimming Coach",
    department: "Sports & Physical Ed",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "2 – 6 Years",
    qualification: "B.P.Ed / M.P.Ed / Certified Swimming Instructor & Lifeguard",
    openingsCount: 2,
    badge: "Campus Sports",
    description:
      "Enthusiastic sports professionals to lead track & field athletics, basketball, football, and our campus semi-Olympic swimming pool coaching.",
    keyResponsibilities: [
      "Train students in swimming stroke mechanics, water safety, and competitive racing.",
      "Coach school teams for inter-school, district, and CBSE cluster tournaments.",
      "Organize annual sports meets, yoga sessions, and physical fitness fitness drills.",
    ],
    requirements: [
      "B.P.Ed / M.P.Ed or recognized swimming coaching and life-saving certification.",
      "Prior coaching experience in schools or sports academies.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "stem-atal-lab-trainer",
    title: "Atal Tinkering & STEM Lab Coordinator (Robotics & AI)",
    department: "STEM & Innovation",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "1 – 4 Years",
    qualification: "B.E / B.Tech / B.Sc in Electronics, Computer Science, or Mechatronics",
    openingsCount: 1,
    badge: "Innovation Lab",
    description:
      "Hands-on technology mentor to inspire students in robotics, IoT, Arduino programming, 3D printing, and design-thinking challenges in our NITI Aayog approved Atal Tinkering Lab.",
    keyResponsibilities: [
      "Conduct regular ATL lab periods for Grades 6 to 10 covering microcontrollers, sensors, and coding.",
      "Mentor student teams for national innovation challenges, hackathons, and science fairs.",
      "Maintain 3D printers, electronic modules, and robotics kits.",
    ],
    requirements: [
      "Engineering or computer science background with hands-on maker skills.",
      "Familiarity with Arduino, Raspberry Pi, Scratch, Python, and 3D modeling.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "special-educator-counselor",
    title: "Special Educator & Student Counselor",
    department: "Administration & Support",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "2 – 5 Years",
    qualification: "M.A / M.Sc in Psychology / Clinical Psychology or Diploma in Special Education (RCI)",
    openingsCount: 1,
    badge: "Student Wellbeing",
    description:
      "Compassionate mental health professional and special educator dedicated to inclusive schooling, emotional wellbeing, career guidance, and learning assistance.",
    keyResponsibilities: [
      "Provide confidential counseling for students facing emotional, behavioral, or academic stress.",
      "Design Individualized Education Plans (IEPs) for students with diverse learning needs.",
      "Conduct life skills and mental wellness workshops across primary and middle school.",
    ],
    requirements: [
      "Master's in Psychology or RCI-recognized qualification in Special Education.",
      "Empathy, patience, and strong communication skills with students, teachers, and parents.",
    ],
    postedDate: "Academic Year 2027-28",
  },
  {
    id: "front-office-admission-counselor",
    title: "Front Desk Executive & Admissions Counselor",
    department: "Administration & Support",
    type: "Full Time",
    location: "Mysuru Campus (Dattagalli)",
    experience: "1 – 4 Years",
    qualification: "Any Graduate with pleasant personality and excellent communication",
    openingsCount: 2,
    badge: "Front Office",
    description:
      "The welcoming voice and face of Kautilya Vidyalaya, assisting prospective parents with school admissions, campus walkthroughs, and administrative inquiries.",
    keyResponsibilities: [
      "Welcome visiting parents and explain the Kautilya pedagogical ethos, facilities, and admission steps.",
      "Manage incoming telephone inquiries and maintain visitor rosters.",
      "Coordinate admission paperwork and communication schedules.",
    ],
    requirements: [
      "Fluency in English and Kannada (Hindi is an advantage).",
      "Courteous telephone etiquette, problem-solving mindset, and basic computer proficiency.",
    ],
    postedDate: "Academic Year 2027-28",
  },
];

export const WHY_WORK_WITH_US = [
  {
    title: "Academic Freedom & Innovation",
    desc: "We encourage innovative pedagogical methods, project-based teaching, and experiential learning in modern smart classrooms.",
    icon: "Sparkles",
  },
  {
    title: "Continuous Professional Development",
    desc: "Faculty undergo regular CBSE masterclasses, technology workshops, and leadership seminars to upgrade their teaching certifications.",
    icon: "GraduationCap",
  },
  {
    title: "Lush Campus & Modern Labs",
    desc: "Enjoy teaching in a serene, eco-friendly campus equipped with Atal Tinkering Labs, composite science labs, swimming pool, and sports arena.",
    icon: "Building2",
  },
  {
    title: "Competitive Compensation & PF",
    desc: "Attractive salary commensurate with qualifications and experience, accompanied by provident fund, gratuity, and statutory benefits.",
    icon: "ShieldCheck",
  },
  {
    title: "Staff Child Education Concession",
    desc: "Substantial educational concessions are provided for the biological children of full-time teaching and non-teaching faculty.",
    icon: "HeartHandshake",
  },
  {
    title: "Respectful, Supportive Culture",
    desc: "Work under progressive leadership that values teacher dignity, collaborative collegiality, and healthy work-life balance.",
    icon: "Users",
  },
];

export const HIRING_PROCESS = [
  {
    step: "01",
    title: "Application & Profile Review",
    desc: "Submit your online application with your resume. Our recruitment panel reviews credentials against role requirements within 3–5 working days.",
  },
  {
    step: "02",
    title: "Initial Interaction & Demo Class",
    desc: "Shortlisted candidates are invited to deliver a 20-minute mock classroom demo in their subject, demonstrating pedagogy and student engagement.",
  },
  {
    step: "03",
    title: "Panel Discussion",
    desc: "A personal conversation with the Academic Coordinator and the Principal to discuss educational philosophy, career aspirations, and school fit.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    desc: "Selected educators receive a formal offer letter followed by a structured orientation to introduce school systems and curriculum plans.",
  },
];

export const CAREER_FAQS = [
  {
    question: "Can fresh graduates or newly certified B.Ed teachers apply?",
    answer:
      "Yes, absolutely. We welcome passionate fresh graduates with strong subject knowledge, high energy, and genuine enthusiasm for teaching. We provide mentorship from senior teachers to help you transition into classroom excellence.",
  },
  {
    question: "What documents should I upload with my application?",
    answer:
      "Please upload an updated resume in PDF or Word format (maximum 10 MB). You may also include details of your highest academic degrees, B.Ed/CTET credentials, and a brief cover note describing your teaching approach.",
  },
  {
    question: "What if my subject or position is not currently listed?",
    answer:
      "You are welcome to select 'Other / General Application' in the application form. We maintain an active talent pool and reach out to suitable candidates as soon as relevant vacancies arise.",
  },
  {
    question: "How soon can I expect a response after applying?",
    answer:
      "Our HR team reviews applications on a rolling basis. Suitable profiles are contacted via email or phone within 5 to 7 working days to schedule a campus interaction and demo class.",
  },
];
