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
  "Front Office",
  "Admissions",
] as const;

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "front-office-associate",
    title: "Front Office Associate",
    department: "Front Office",
    type: "Full Time",
    location: "Dattagalli, Mysuru",
    experience: "0–3 Years / Freshers Welcome",
    qualification: "Any Graduate",
    openingsCount: 2,
    badge: "Official Opening • Freshers Welcome",
    description:
      "Serve as the welcoming face and voice of Kautilya Vidyalaya, handling visitors, parent inquiries, telephone communications, and day-to-day front office coordination.",
    keyResponsibilities: [
      "Welcoming parents, visiting dignitaries, and guests with courtesy and professionalism.",
      "Handling incoming telephone calls, general school inquiries, and appointment scheduling.",
      "Maintaining front-desk visitor registers, student movement logs, and official records.",
      "Coordinating with school administration and faculty for smooth daily front-desk operations.",
    ],
    requirements: [
      "Qualification: Any Graduate from a recognized university.",
      "Experience: Candidates with 0–3 years of experience / Freshers are welcome.",
      "Skills: Good communication skills in English and Kannada.",
      "Proficiency in MS Office (Word, Excel) and basic computer operations.",
    ],
    postedDate: "Actively Hiring",
  },
  {
    id: "admission-associate",
    title: "Admission Associate",
    department: "Admissions",
    type: "Full Time",
    location: "Dattagalli, Mysuru",
    experience: "0–4 Years / Freshers Welcome",
    qualification: "Any Graduate / MBA",
    openingsCount: 2,
    badge: "Official Opening • Freshers Welcome",
    description:
      "Engage with prospective parents, provide personalized academic counseling, guide families through campus facilities, and manage the student admission lifecycle.",
    keyResponsibilities: [
      "Conduct parent counseling sessions highlighting Kautilya's holistic CBSE education.",
      "Guide prospective parents through admission formalities, fee structures, and document verification.",
      "Coordinate campus tour walk-throughs and follow up with prospective admission inquiries.",
      "Manage student enrollment files and parent orientation communication.",
    ],
    requirements: [
      "Qualification: Any Graduate or MBA (Marketing / HR / Education Management).",
      "Experience: Candidates with 0–4 years of experience / Freshers are welcome.",
      "Skills: Counselling, parent communication, and strong interpersonal skills.",
      "Professional demeanor, active listening, and high empathy for parents and children.",
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
    question: "Are freshers eligible to apply for these positions?",
    answer:
      "Yes, absolutely! Freshers are warmly welcome to start their career with us. We value enthusiasm, willingness to learn, and strong communication skills.",
  },
  {
    question: "What documents should I upload with my application?",
    answer:
      "Please upload an updated resume in PDF, DOC, or DOCX format (up to 10 MB). You can also include details of your highest graduation degree and relevant skills.",
  },
  {
    question: "Where will the work location be?",
    answer:
      "All positions are based on campus at Kautilya Vidyalaya, Kanakadasanagara, Dattagalli, Mysuru, Karnataka.",
  },
  {
    question: "How can I follow up on my application?",
    answer:
      "You may write directly to careers@kautilyavidyalaya.edu.in or contact our administrative desk at +91 70906 71299 / 0821 - 2460266.",
  },
];
