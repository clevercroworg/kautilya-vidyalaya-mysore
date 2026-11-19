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

export interface HiringPoster {
  src: string;
  download: string;
  alt: string;
}

export const HIRING_POSTERS: HiringPoster[] = [
  {
    src: "/images/careers/computer-teacher-hiring-poster.webp",
    download: "/images/careers/computer-teacher-hiring-poster.jpg",
    alt: "We Are Hiring - Computer Teacher - Kautilya Vidyalaya",
  },
  {
    src: "/images/careers/marketing-hiring-poster.webp",
    download: "/images/careers/marketing-hiring-poster.jpg",
    alt: "We Are Hiring - Marketing Manager and Marketing Executive - Kautilya Vidyalaya",
  },
];

export const CAREER_DEPARTMENTS = [
  "All Openings",
  "Teaching",
  "Marketing",
] as const;

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "computer-teacher",
    title: "Computer Teacher",
    department: "Teaching",
    type: "Full Time",
    location: "Dattagalli, Mysuru",
    experience: "Freshers & Experienced Welcome",
    qualification: "B.E. in Computer Science or MCA",
    openingsCount: 1,
    badge: "Teaching • Freshers Welcome",
    description:
      "Teach computer science and digital literacy to our students, building strong foundations in coding, computational thinking, and responsible use of technology.",
    keyResponsibilities: [
      "Plan and deliver computer science lessons as per the CBSE curriculum.",
      "Conduct practical sessions in the computer lab and guide students on coding projects.",
      "Assess student progress through assignments, practicals, and examinations.",
      "Support the school's technology initiatives and student tech activities.",
    ],
    requirements: [
      "Qualification: B.E. in Computer Science or MCA.",
      "Experience: Freshers and experienced candidates are welcome to apply.",
      "Good command of English and the ability to explain concepts clearly to students.",
    ],
    postedDate: "Actively Hiring",
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    department: "Marketing",
    type: "Full Time",
    location: "Mysuru",
    experience: "Immediate Joining",
    qualification: "Any Graduate",
    openingsCount: 1,
    badge: "Immediate Joining",
    description:
      "Lead the school's marketing and outreach efforts, plan admission campaigns, and strengthen Kautilya Vidyalaya's presence across Mysuru.",
    keyResponsibilities: [
      "Plan and execute admission and outreach campaigns.",
      "Lead and coordinate the marketing team's field and digital activities.",
      "Build relationships with parents, communities, and local partners.",
      "Track enquiries and report on campaign results.",
    ],
    requirements: [
      "Qualification: Any Graduate.",
      "Language: Kannada, English, and Hindi.",
      "Location: Mysore.",
      "Immediate joining.",
    ],
    postedDate: "Actively Hiring",
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive",
    department: "Marketing",
    type: "Full Time",
    location: "Mysuru",
    experience: "Immediate Joining",
    qualification: "Any Graduate",
    openingsCount: 2,
    badge: "Immediate Joining",
    description:
      "Support the school's admission outreach by engaging with parents, representing the school at events, and following up on enquiries.",
    keyResponsibilities: [
      "Carry out field marketing and outreach activities across Mysuru.",
      "Represent the school at events, exhibitions, and community programmes.",
      "Follow up with prospective parents and admission enquiries.",
      "Assist the Marketing Manager with campaign execution and reporting.",
    ],
    requirements: [
      "Qualification: Any Graduate.",
      "Language: Kannada, English, and Hindi.",
      "Location: Mysore.",
      "Immediate joining.",
    ],
    postedDate: "Actively Hiring",
  },
];

export const WHY_WORK_WITH_US = [
  {
    title: "Supportive & Collaborative Team",
    desc: "Join a warm, close-knit institutional team where your ideas are valued and colleagues work together to create an uplifting environment.",
    icon: "Users",
  },
  {
    title: "Professional Growth & Learning",
    desc: "Opportunities for hands-on mentorship, capability-building workshops, and continuous career development right from day one.",
    icon: "GraduationCap",
  },
  {
    title: "A Dynamic School Environment",
    desc: "Experience the vibrant, purposeful energy of a premier CBSE campus dedicated to shaping young minds and empowering futures.",
    icon: "Sparkles",
  },
  {
    title: "Freshers Welcome & Mentorship",
    desc: "Start your career with us! We provide comprehensive onboarding and experienced mentors to help fresh graduates build rewarding careers.",
    icon: "HeartHandshake",
  },
  {
    title: "Lush & Serene Campus",
    desc: "Enjoy working in a state-of-the-art campus in Dattagalli, Mysuru, equipped with modern administrative infrastructure and amenities.",
    icon: "Building2",
  },
  {
    title: "Competitive Compensation & PF",
    desc: "Attractive compensation commensurate with background, accompanied by provident fund, statutory benefits, and institutional support.",
    icon: "ShieldCheck",
  },
];

export const HIRING_PROCESS = [
  {
    step: "01",
    title: "Application Submission",
    desc: "Submit your online application with your resume or email directly to careers@kautilyavidyalaya.edu.in.",
  },
  {
    step: "02",
    title: "Profile Screening",
    desc: "Our recruitment committee reviews credentials, qualifications, and communication skills against role requirements.",
  },
  {
    step: "03",
    title: "Campus Interaction",
    desc: "Shortlisted candidates are invited for a personal interview at our Dattagalli campus to evaluate role fit and interpersonal alignment.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    desc: "Selected candidates receive a formal offer letter followed by structured orientation to school administrative systems.",
  },
];

export const CAREER_FAQS = [
  {
    question: "Are freshers eligible to apply?",
    answer:
      "Yes. Freshers are welcome to apply for the Computer Teacher position. We value enthusiasm, willingness to learn, and strong communication skills.",
  },
  {
    question: "What documents should I upload with my application?",
    answer:
      "Please upload an updated resume in PDF, DOC, or DOCX format (up to 10 MB). You can also include details of your highest graduation degree and relevant skills.",
  },
  {
    question: "Where will the work location be?",
    answer:
      "All positions are based in Mysuru, at Kautilya Vidyalaya, Kanakadasanagara, Dattagalli, Mysuru, Karnataka.",
  },
  {
    question: "How can I follow up on my application?",
    answer:
      "You may write directly to careers@kautilyavidyalaya.edu.in or contact our administrative desk at +91 70906 71299 / 0821 - 2460266.",
  },
];
