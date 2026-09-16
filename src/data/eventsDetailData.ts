export interface EventPhoto {
  url: string;
  caption: string;
  aspect?: "landscape" | "portrait" | "square";
}

export interface EventDetail {
  slug: string;
  title: string;
  shortTitle?: string;
  date: string;
  category: string;
  location: string;
  attendees: string;
  coverImage: string;
  description: string;
  detailedParagraphs: string[];
  highlights: string[];
  learningOutcomes: string[];
  gallery: EventPhoto[];
}

export const eventsDetailData: EventDetail[] = [
  {
    slug: "colors-day-celebrations",
    title: "Colors Day Celebrations",
    shortTitle: "Colors Day",
    date: "August 2024",
    category: "Kindergarten & Early Childhood",
    location: "Pre-Primary Wing & Activity Amphitheatre",
    attendees: "Pre-KG, LKG, UKG Students & Parents",
    coverImage: "/images/events/kautilya-colors-day-celebration.webp",
    description:
      "A radiant sensory celebration introducing our youngest learners to chromatic wonder, tactile art, and expressive self-confidence through joyful experiential play.",
    detailedParagraphs: [
      "Colors Day at Kautilya Vidyalaya is an immersive developmental milestone for our foundational learners. Decorated in vibrant rainbow canopies and interactive activity booths, the pre-primary wing transformed into a colorful wonderland designed to stimulate cognitive recognition and sensory engagement.",
      "Guided by experienced Mother Teachers, children engaged in tactile finger painting, clay sculpting, color classification games, and group rainbow handprint murals. The celebration culminated in enthusiastic musical rhymes and dramatic storytelling illustrating the harmony of diverse colors in nature.",
    ],
    highlights: [
      "Tactile finger-painting & rainbow handprint collaborative murals",
      "Experiential color classification & primary-secondary mixing games",
      "Theme-based dress-up and rhyme recitation by kindergarteners",
      "Interactive parent-child craft stations and keepsake memory creation",
    ],
    learningOutcomes: [
      "Enhanced chromatic identification and fine motor dexterity",
      "Social communication and cooperative peer interaction",
      "Sensory integration and joyful creative self-expression",
    ],
    gallery: [
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-01.webp",
        caption: "Kindergarten students exploring vibrant chromatic pigments and papercraft",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-02.webp",
        caption: "Interactive color sorting and sensory discovery booths",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-03.webp",
        caption: "Joyful group activity with Mother Teachers guiding early learners",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-04.webp",
        caption: "Creative rainbow painting and fine motor coordination exercises",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-05.webp",
        caption: "Hands-on tactile art stations in the pre-primary activity zone",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-06.webp",
        caption: "Tiny tots proudly displaying their colorful craft masterpieces",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-07.webp",
        caption: "Expressive finger painting and collaborative class mural",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-08.webp",
        caption: "Vibrant thematic classroom decorations and learning corners",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-09.webp",
        caption: "Sensory integration play with colorful tactile materials",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-10.webp",
        caption: "Enthusiastic participation in kindergarten color day festivities",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-11.webp",
        caption: "Young learners discovering primary and secondary color mixing",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-12.webp",
        caption: "Lively stage performance and color-themed action rhymes",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-13.webp",
        caption: "Celebration of imagination and creative confidence in early childhood",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-14.webp",
        caption: "Pre-primary students sharing joyful moments with peers",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-15.webp",
        caption: "Parent-teacher engagement during the Colors Day showcase",
        aspect: "landscape",
      },
      {
        url: "/images/events/colors-day-celebrations/colors-day-celebrations-16.webp",
        caption: "Cherished childhood memories created during foundational learning",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "science-display",
    title: "Annual Science Display & STEM Exhibition",
    shortTitle: "Science Display",
    date: "November 2024",
    category: "STEM & Science",
    location: "Composite Science Laboratories & ATL Innovation Hub",
    attendees: "Grades 4 to 10, Faculty & Visiting Parents",
    coverImage: "/images/events/kautilya-annual-science-display.webp",
    description:
      "An inspiring showcase of inquiry-driven scientific models, working renewable energy prototypes, and robotics engineered entirely by Kautilya students.",
    detailedParagraphs: [
      "The Annual Science Display is Kautilya Vidyalaya's flagship STEM showcase, transforming classrooms into bustling scientific research pavilions. Students from Grades 4 through 10 presented working hydraulic bridges, automated drip irrigation systems, renewable energy generators, and environmental bio-filters.",
      "A special highlight was the Atal Tinkering Lab (ATL) pavilion, where students demonstrated Arduino-controlled obstacle-avoidance rovers, sensor-based waste sorters, and rapid 3D printed mechanical prototypes. Independent panel evaluators praised the students' articulate conceptual depth and poise.",
    ],
    highlights: [
      "Over 75 student-engineered working models across Physics, Chemistry & Biology",
      "Live robotics and micro-controller demonstrations from the Atal Tinkering Lab",
      "Sustainable development solutions focusing on water conservation & clean energy",
      "Interactive visitor testing stations and peer-to-peer scientific explanations",
    ],
    learningOutcomes: [
      "Empirical testing, hypothesis formation, and analytical methodology",
      "Public speaking and articulate technical presentation skills",
      "Collaborative teamwork in multidisciplinary engineering challenges",
    ],
    gallery: [
      {
        url: "/images/events/science-display/science-display-01.webp",
        caption: "Students presenting working hydraulic and pneumatic engineering models",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-02.webp",
        caption: "Renewable energy and eco-friendly solar power generator demonstrations",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-03.webp",
        caption: "Atal Tinkering Lab student-built microcontroller and robotic projects",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-04.webp",
        caption: "Interactive physics experiments explaining fluid dynamics and mechanics",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-05.webp",
        caption: "Bio-filtration and water conservation working models on display",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-06.webp",
        caption: "Young scientists articulating complex scientific concepts to visitors",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-07.webp",
        caption: "Hands-on STEM apparatus testing station for visiting parents and peers",
        aspect: "landscape",
      },
      {
        url: "/images/events/science-display/science-display-08.webp",
        caption: "Innovative chemistry and environmental science prototype exhibits",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "educational-trip-to-singapore",
    title: "Educational Trip To Singapore",
    shortTitle: "Singapore Trip",
    date: "May 2024",
    category: "International Learning Journey",
    location: "Singapore (Science Centre, Marina Bay, Universal Studios)",
    attendees: "Senior School Students & Faculty Escorts",
    coverImage: "/images/events/kautilya-singapore-educational-trip.webp",
    description:
      "A global outbound immersion expanding students' horizons through world-class science centers, urban sustainability architecture, and multicultural exposure.",
    detailedParagraphs: [
      "Kautilya Vidyalaya's international educational journey to Singapore provided senior students with a transformative perspective on global citizenship, advanced robotics, and sustainable modern urban design. The 5-day tour balanced rigorous educational expeditions with cultural discovery.",
      "Students explored the Singapore Science Centre's hands-on physics simulators and DNA labs, observed futuristic biodiversity conservation at Gardens by the Bay, and analyzed smart-city water reclamation at Marina Barrage. Evenings included team-building debriefs where students documented their reflections.",
    ],
    highlights: [
      "Hands-on genomic and kinetic exhibits at the world-renowned Singapore Science Centre",
      "Deep dive into sustainable climate engineering at Gardens by the Bay & Cloud Forest",
      "Marina Barrage urban flood control and reverse-osmosis desalination study",
      "Global cultural exposure, international travel independence, and teamwork",
    ],
    learningOutcomes: [
      "Appreciation of global innovation and sustainable environmental solutions",
      "Cross-cultural empathy and heightened global awareness",
      "Personal self-reliance, time management, and travel responsibility",
    ],
    gallery: [
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-01.webp",
        caption: "Kautilya delegation at Marina Bay Sands and Singapore Waterfront",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-02.webp",
        caption: "Hands-on exploration at the Singapore Science Centre exhibits",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-03.webp",
        caption: "Immersive nature and climate study at Gardens by the Bay Flower Dome",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-04.webp",
        caption: "Students experiencing global architecture and smart city urban planning",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-05.webp",
        caption: "Group briefing and cross-cultural orientation in central Singapore",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-06.webp",
        caption: "Exploring the Cloud Forest and bio-diverse vertical conservatory",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-07.webp",
        caption: "Interactive robotics and technology pavilion at Singapore Science Centre",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-08.webp",
        caption: "Team bonding and experiential learning across iconic landmarks",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-09.webp",
        caption: "Students admiring the world-famous Supertree Grove in Singapore",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-10.webp",
        caption: "Educational tour through Singapore public transport & sustainability systems",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-11.webp",
        caption: "Cultural immersion and heritage walk in Singapore historic districts",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-12.webp",
        caption: "Night Safari biodiversity study and nocturnal wildlife observation",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-13.webp",
        caption: "Student reflections and journal documentation during global travel",
        aspect: "landscape",
      },
      {
        url: "/images/events/educational-trip-to-singapore/educational-trip-to-singapore-14.webp",
        caption: "Commemorative group photo celebrating international horizons",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "saamskrithika-parva-2023-24",
    title: "Saamskrithika Parva 2023-24 Annual Cultural Fest",
    shortTitle: "Saamskrithika Parva",
    date: "December 2023",
    category: "Cultural & Performing Arts",
    location: "Kalamandira Auditorium & School Amphitheatre, Mysuru",
    attendees: "Entire School Community, Management & 1200+ Parents",
    coverImage: "/images/events/kautilya-saamskrithika-parva.webp",
    description:
      "A magnificent celebration of Indian classical arts, theatrical drama, folk traditions, and contemporary musical spectacles celebrating Indian heritage.",
    detailedParagraphs: [
      "Saamskrithika Parva is the premier annual cultural festival of Kautilya Vidyalaya, bringing together over 600 student performers in a celebration of music, rhythm, literature, and theatre. Hosted at the grand Kalamandira Auditorium in Mysuru, the theme reflected 'Unity in Diversity and Timeless Heritage'.",
      "From classical Bharatanatyam and Yakshagana invocations to energetic contemporary fusion numbers and thought-provoking multilingual drama on environmental stewardship, the extravaganza captivated audiences. Professional lighting, dynamic LED stage backgrounds, and synchronized acoustic arrangements elevated every performance.",
    ],
    highlights: [
      "Participation of over 600 student performers across kindergarten, primary, and high school",
      "Spectacular classical Indian Bharatanatyam, Kathak, and traditional folk dances",
      "Original Kannada and English theatrical plays on historical leadership and ethics",
      "Mesmerizing school orchestra and choral music performances",
    ],
    learningOutcomes: [
      "Stage confidence, poise, and artistic self-expression",
      "Deep reverence for Indian classical performing arts and cultural roots",
      "Disciplined rehearsal commitment and large-scale ensemble synergy",
    ],
    gallery: [
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-01.webp",
        caption: "Grand stage performance during Saamskrithika Parva annual festival",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-02.webp",
        caption: "Students in classical Indian attire performing thematic opening prayer",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-03.webp",
        caption: "Dynamic choreography celebrating regional folk traditions of Karnataka",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-04.webp",
        caption: "Vibrant lighting and digital backdrop illuminating theatrical presentations",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-05.webp",
        caption: "Choral music performance by the senior school vocal ensemble",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-06.webp",
        caption: "Contemporary fusion dance drama portraying environmental awareness",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-07.webp",
        caption: "Student anchors hosting the annual evening with eloquence and charm",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-08.webp",
        caption: "Honouring academic achievers and co-curricular champions on stage",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-09.webp",
        caption: "Parent community gathered in the packed amphitheatre enjoying performances",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-10.webp",
        caption: "Elaborate mythological dance drama with intricate costumes and rhythm",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-11.webp",
        caption: "Group harmony dance representing cultural unity and heritage",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-12.webp",
        caption: "Young performers showcasing classical Bharatanatyam mudras with elegance",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-13.webp",
        caption: "Theatrical musical drama bringing historical legends to life",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-14.webp",
        caption: "Enthusiastic audience applause during the evening crescendo",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-15.webp",
        caption: "Faculty and student coordinators behind-the-scenes stage management",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-16.webp",
        caption: "Trophy and citation distribution to outstanding student leaders",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-17.webp",
        caption: "Dazzling group finale bringing all participating houses together",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-18.webp",
        caption: "Folk dance celebration echoing vibrant rhythm and percussion beats",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-19.webp",
        caption: "Expressive acting in English and Kannada dramatic plays",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-20.webp",
        caption: "Lighting of the ceremonial lamp by esteemed dignitaries and trustees",
        aspect: "landscape",
      },
      {
        url: "/images/events/saamskrithika-parva-2023-24/saamskrithika-parva-2023-24-21.webp",
        caption: "Grand concluding national anthem with all students on stage",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "dynamic-school-award-2025",
    title: "Honoured as 'The Dynamic School' at Karnataka Educators’ Summit 2025",
    shortTitle: "Dynamic School Award",
    date: "December 19, 2025",
    category: "State Distinction & Award",
    location: "Karnataka Educators’ Summit 2025, Bengaluru",
    attendees: "Management Trustees, Principal & Academic Leadership",
    coverImage: "/images/events/kautilya-educators-summit-award.jpg",
    description:
      "Prestigious state-level honor presented to Kautilya Vidyalaya in recognition of progressive pedagogy, value-based holistic education, and state-of-the-art STEM labs.",
    detailedParagraphs: [
      "At the Karnataka Educators' Summit 2025, Kautilya Vidyalaya was crowned with the distinguished 'The Dynamic School' accolade. The prestigious honor evaluates CBSE schools across Karnataka for academic rigor, innovation in classroom pedagogy, infrastructural excellence, and student wellbeing.",
      "The jury specifically commended Kautilya Vidyalaya's integrated Atal Tinkering Lab robotics curriculum, its exceptional sports training facilities, and an unbroken 100% CBSE board examination record. Chairman Sri T. Babu and Director Smt. Jayashree Babu received the citation amidst applauding educational luminaries.",
    ],
    highlights: [
      "Statewide recognition among hundreds of premier CBSE institutions in Karnataka",
      "Honoring progressive pedagogy, Atal Tinkering Labs, and values-driven mentoring",
      "Citation celebrating consistent 100% CBSE Class 10 board exam track records",
      "Felicitation ceremony attended by university chancellors and education officials",
    ],
    learningOutcomes: [
      "Reaffirmation of our institutional commitment to world-class schooling",
      "Inspiration for students and faculty to continuously aim for higher benchmarks",
    ],
    gallery: [
      {
        url: "/images/events/kautilya-educators-summit-award.jpg",
        caption: "School leadership receiving 'The Dynamic School' trophy and certificate of distinction",
        aspect: "landscape",
      },
      {
        url: "/images/kautilya-campus-reception.jpg",
        caption: "Award trophy showcased at the school reception foyer",
        aspect: "landscape",
      },
      {
        url: "/images/chairman-t-babu.jpg",
        caption: "Chairman Sri T. Babu addressing the assembly on academic quality",
        aspect: "landscape",
      },
      {
        url: "/images/kautilya-classroom-session.png",
        caption: "Interactive student-centered classroom methods celebrated by the award jury",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "student-rocket-launch",
    title: "Students Built Rockets Launched from School Premises",
    shortTitle: "Rocket Launch Event",
    date: "October 4, 2023",
    category: "Space & Aerospace Science",
    location: "Kautilya Athletic Grounds & Launch Range",
    attendees: "Middle & High School Students, Science Faculty",
    coverImage: "/images/events/kautilya-student-rocket-launch.webp",
    description:
      "A thrilling practical aerospace milestone where student-fabricated pressurized and solid-fuel rockets achieved successful apogee launches from the school campus.",
    detailedParagraphs: [
      "On World Space Week, students from the Kautilya Aerospace Club achieved a thrilling feat by designing, testing, and successfully launching custom-engineered miniature rockets from the campus sports ground. The event brought textbook aerodynamics and propulsion physics vibrantly to life.",
      "Under the mentorship of Atal Tinkering Lab trainers, students calculated centre-of-pressure and centre-of-mass, 3D-printed nose cones, calibrated parachute recovery modules, and tracked altitude using electronic altimeter telemetry. The entire student body erupted in cheers as each rocket soared hundreds of feet into the blue Mysuru sky.",
    ],
    highlights: [
      "Successful launch of 12 student-designed and built model rockets",
      "Real-time telemetry tracking and apogee altitude measurement",
      "Functional parachute deployment and safe payload recovery",
      "Hands-on practical application of Newton's laws and aerodynamics",
    ],
    learningOutcomes: [
      "Practical mastery of propulsion physics, center of mass, and drag coefficients",
      "Hardware prototyping, digital fabrication, and safety protocol adherence",
      "Igniting aerospace and astronomical engineering career aspirations",
    ],
    gallery: [
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-01.webp",
        caption: "Student rocketry team assembling solid fuel propulsion test models",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-02.webp",
        caption: "Final safety inspection and countdown protocol on the school grounds",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-03.webp",
        caption: "T-minus zero: High-altitude rocket ignition and atmospheric ascent",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-04.webp",
        caption: "Students tracking rocket telemetry data and parachute deployment",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-05.webp",
        caption: "Aerospace club members demonstrating aerodynamic fin stabilization",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-06.webp",
        caption: "Hands-on avionics and altitude measurement sensor calibration",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-07.webp",
        caption: "Faculty aerospace mentors reviewing flight trajectory with students",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-08.webp",
        caption: "Curious peers observing model rocket staging and recovery systems",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-09.webp",
        caption: "STEM team displaying custom 3D printed rocket nosecones",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-10.webp",
        caption: "Successful recovery of parachute payloads on the school sports field",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-11.webp",
        caption: "Pre-launch briefing on Newton third law and thrust calculations",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-12.webp",
        caption: "Engineering students preparing launch rails and electronic igniters",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-13.webp",
        caption: "Group celebration following successful sub-orbital model rocket launch",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-14.webp",
        caption: "Younger students inspired by real-world aerospace demonstrations",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-15.webp",
        caption: "Data analysis station computing maximum apogee and flight duration",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-16.webp",
        caption: "Safe propellant handling demonstration under expert supervision",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-17.webp",
        caption: "Student rocket scientists explaining design iterations to faculty",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-18.webp",
        caption: "Certificate presentation to participating student aerospace engineers",
        aspect: "landscape",
      },
      {
        url: "/images/events/student-rocket-launch/student-rocket-launch-19.webp",
        caption: "Commemorative launch day photo celebrating scientific curiosity",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "annual-sports-meet",
    title: "Annual Athletic Meet & Sports Championship",
    shortTitle: "Sports Meet",
    date: "January 2025",
    category: "Sports & Physical Fitness",
    location: "Kautilya Sports Complex & Track",
    attendees: "All Students, House Contingents & Parents",
    coverImage: "/images/events/kautilya-annual-sports-meet.webp",
    description:
      "A spirited celebration of athletic prowess, house rivalries, track-and-field triumphs, and the enduring values of sportsmanship and team grit.",
    detailedParagraphs: [
      "The Annual Sports Meet at Kautilya Vidyalaya is a vibrant carnival of athleticism and house pride. Commencing with a ceremonial torch relay and a synchronized march-past by the four student houses, the day featured high-intensity track sprints, long jump, shot put, and inter-house relay races.",
      "The school band added rhythmic grandeur while student cheering squads rallied behind their competitors. Medals and the coveted Overall Championship Rolling Trophy were conferred by national sports personalities invited as guests of honor.",
    ],
    highlights: [
      "Spectacular synchronized march-past led by the school brass band",
      "Track and field events spanning 100m, 200m, 4x100m relay, and obstacle courses",
      "Martial arts karate and roller-skating demonstration exhibitions",
      "Fierce inter-house competition culminating in the Overall Trophy conferral",
    ],
    learningOutcomes: [
      "Physical stamina, agility, and healthy competitive spirit",
      "Resilience, graciousness in victory and defeat, and team solidarity",
    ],
    gallery: [
      {
        url: "/images/events/annual-sports-meet/annual-sports-meet-01.webp",
        caption: "Athletes competing fiercely in the 100m sprint finals on track",
        aspect: "landscape",
      },
      {
        url: "/images/events/annual-sports-meet/annual-sports-meet-02.webp",
        caption: "State-level roller skating championship winners displaying gold medals",
        aspect: "landscape",
      },
      {
        url: "/images/events/annual-sports-meet/annual-sports-meet-03.webp",
        caption: "Karate kata and kumite demonstration by school martial arts team",
        aspect: "landscape",
      },
      {
        url: "/images/events/annual-sports-meet/annual-sports-meet-04.webp",
        caption: "Badminton championship match at the indoor sports facility",
        aspect: "landscape",
      },
      {
        url: "/images/events/annual-sports-meet/annual-sports-meet-05.webp",
        caption: "Gymnastics routine showcasing flexibility and balance by student gymnasts",
        aspect: "landscape",
      },
      {
        url: "/images/events/annual-sports-meet/annual-sports-meet-06.webp",
        caption: "Grand podium medal ceremony honouring overall house sports champions",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "77th-independence-day",
    title: "Exuberant Celebration of 77th Independence Day",
    shortTitle: "Independence Day",
    date: "August 15, 2023",
    category: "National Festival & Patriotism",
    location: "School Forecourt & Tricolor Flag Mast",
    attendees: "Students, Staff, Management & Alumni",
    coverImage: "/images/events/kautilya-independence-day-parade.webp",
    description:
      "Patriotic fervor echoed across campus with solemn flag unfurling, patriotic choral recitals, martial arts demonstrations, and tributes to freedom champions.",
    detailedParagraphs: [
      "The 77th Independence Day at Kautilya Vidyalaya was marked by heartfelt patriotism and solemn reflection on our nation's constitutional heritage. Chairman Sri T. Babu unfurled the National Tricolor followed by the resonant singing of the National Anthem.",
      "Students presented synchronized parade drills, patriotic speeches in Kannada, English, and Hindi, and an evocative musical drama honoring freedom fighters. The school choir delivered stirring renditions of 'Vande Mataram' and 'Vijayi Vishwa Tiranga Pyaara'.",
    ],
    highlights: [
      "Ceremonial flag hoisting and salute by NCC, Scouts and Guides platoons",
      "Patriotic choral hymns by the student choir accompanied by traditional instruments",
      "Inspiring addresses highlighting youth responsibility in nation building",
      "Sweet distribution and cultural program celebrating Indian sovereignty",
    ],
    learningOutcomes: [
      "Deep-rooted patriotic pride, civic responsibility, and constitutional awareness",
      "Respect for national martyrs and historical sacrifices",
    ],
    gallery: [
      {
        url: "/images/events/77th-independence-day/77th-independence-day-01.webp",
        caption: "Ceremonial unfurling of the National Tricolour on Independence Day",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-02.webp",
        caption: "School NCC cadet contingent presenting the ceremonial guard of honour",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-03.webp",
        caption: "Disciplined student march-past led by the school band and house captains",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-04.webp",
        caption: "Patriotic group song performance echoing national unity and pride",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-05.webp",
        caption: "Students dressed as freedom fighters portraying India freedom struggle",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-06.webp",
        caption: "Chairman and dignitaries addressing students on constitutional values",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-07.webp",
        caption: "Tricolour balloon release marking the celebration of national sovereignty",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-08.webp",
        caption: "Expressive patriotic dance drama celebrating diverse Indian cultures",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-09.webp",
        caption: "Distinguished alumni and parents joining the solemn national ceremony",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-10.webp",
        caption: "Primary school children waving hand-held tricolour flags with joy",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-11.webp",
        caption: "Salute to the national flag during the playing of the National Anthem",
        aspect: "landscape",
      },
      {
        url: "/images/events/77th-independence-day/77th-independence-day-12.webp",
        caption: "Sweet distribution and festive camaraderie across campus grounds",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "investiture-ceremony",
    title: "Student Council Investiture Ceremony",
    shortTitle: "Investiture Ceremony",
    date: "July 2024",
    category: "Student Leadership & Governance",
    location: "Main Auditorium",
    attendees: "Elected Student Leaders, Parents & Teachers",
    coverImage: "/images/events/kautilya-investiture-student-council.webp",
    description:
      "Conferring authority and leadership responsibilities upon newly elected student council prefects, house captains, and cultural secretaries.",
    detailedParagraphs: [
      "The Investiture Ceremony signifies the dawn of leadership for the academic session. Deserving students elected democratically through peer voting were formally inducted into the Student Council. Adorned in crisp uniforms and crisp house sashes, the student leaders marched proudly to the dais.",
      "Principal Smt. Jayashree Babu administered the solemn oath of duty, integrity, and impartial service. The Head Boy and Head Girl shared their vision for student collaboration, academic excellence, and campus sustainability.",
    ],
    highlights: [
      "Formal conferral of badges and sashes to Head Boy, Head Girl, and Prefects",
      "Investiture oath pledging accountability, peer empathy, and discipline",
      "Handing over of the prestigious School and House flags to captains",
      "Keynote mentorship address on ethical 21st-century leadership",
    ],
    learningOutcomes: [
      "Democratic governance, accountability, and ethical servant leadership",
      "Public speaking, initiative-taking, and peer mentorship responsibility",
    ],
    gallery: [
      {
        url: "/images/events/investiture-ceremony/investiture-ceremony-01.webp",
        caption: "Pinning of the leadership badge on the incoming Head Boy",
        aspect: "landscape",
      },
      {
        url: "/images/events/investiture-ceremony/investiture-ceremony-02.webp",
        caption: "Conferring the official ceremonial sash on the incoming Head Girl",
        aspect: "landscape",
      },
      {
        url: "/images/events/investiture-ceremony/investiture-ceremony-03.webp",
        caption: "Student Council members taking the solemn oath of leadership and integrity",
        aspect: "landscape",
      },
      {
        url: "/images/events/investiture-ceremony/investiture-ceremony-04.webp",
        caption: "Handing over of the prestigious school and house flags to student captains",
        aspect: "landscape",
      },
      {
        url: "/images/events/investiture-ceremony/investiture-ceremony-09.webp",
        caption: "Student council group portrait signifying commitment and service",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "grade-10-graduation-day",
    title: "Grade 10 Graduation Day & Valedictory Ceremony",
    shortTitle: "Graduation Day",
    date: "February 2024",
    category: "Academic Milestones",
    location: "Kalamandira Auditorium",
    attendees: "Grade 10 Batch, Teachers & Parents",
    coverImage: "/images/events/kautilya-grade-10-graduation-day.webp",
    description:
      "An emotional and celebratory valedictory milestone honoring our outgoing Grade 10 batch as they embark on higher secondary careers.",
    detailedParagraphs: [
      "Graduation Day marks a poignant rites-of-passage for Grade 10 students concluding their decade-long journey at Kautilya Vidyalaya. Donning graduation robes and caps, the batch gathered with faculty and proud parents for a memorable evening of gratitude.",
      "The ceremony featured lighting of the lamp of wisdom, symbolic passing of the flame to Grade 9 juniors, heartfelt student reflections, and blessings from academic mentors wishing them success in the upcoming CBSE board examinations.",
    ],
    highlights: [
      "Conferral of graduation scrolls and commemorative yearbooks",
      "Passing of the torch of knowledge to the incoming senior batch",
      "Moving nostalgic speeches by outgoing student toppers and teachers",
      "Blessing ceremonies and special prayers for CBSE Board success",
    ],
    learningOutcomes: [
      "Sense of accomplishment, gratitude toward mentors, and lifelong school bond",
      "Preparedness and self-assurance for higher secondary and collegiate pathways",
    ],
    gallery: [
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-01.webp",
        caption: "Ceremonial lighting of the lamp marking the commencement of Graduation Day",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-02.webp",
        caption: "Grade 10 students receiving personalized academic citations on stage",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-03.webp",
        caption: "Valedictorian delivering an emotional speech reflecting on school years",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-04.webp",
        caption: "Parents watching with pride as their wards receive graduation certificates",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-05.webp",
        caption: "Blessings and inspirational words of wisdom from Chairman and Principal",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-06.webp",
        caption: "Passing of the ceremonial candle of knowledge to junior student representatives",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-07.webp",
        caption: "Tribute performance by Grade 9 students honoring their graduating seniors",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-08.webp",
        caption: "Special achievement trophies awarded for all-round excellence and character",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-09.webp",
        caption: "Graduating cohort wearing ceremonial graduation stoles with honor",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-10.webp",
        caption: "Heartfelt interactions and blessings shared between teachers and students",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-11.webp",
        caption: "Students writing cherished farewell messages in graduation memory books",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-12.webp",
        caption: "Musical farewell song performed by the graduating class of Grade 10",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-13.webp",
        caption: "Standing ovation for teachers who nurtured students through their journey",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-14.webp",
        caption: "Group graduation portrait on the grand school steps",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-15.webp",
        caption: "Emotional farewell embraces and photographs with faculty mentors",
        aspect: "landscape",
      },
      {
        url: "/images/events/grade-10-graduation-day/grade-10-graduation-day-16.webp",
        caption: "Commencement of new academic horizons and lifelong Kautilya alumni bonds",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "vishishtah-samaaroh-competition",
    title: "Vishishtah Samaaroh Inter-School Fest",
    shortTitle: "Vishishtah Samaaroh",
    date: "October 2023",
    category: "Inter-School Competitions",
    location: "School Campus Grounds & Auditoriums",
    attendees: "Students from 25+ Mysuru Schools",
    coverImage: "/images/events/kautilya-vishishtah-competition.webp",
    description:
      "A grand inter-school confluence of debates, classical quizzes, robotics showcases, and creative arts hosting leading institutions across Mysuru.",
    detailedParagraphs: [
      "'Vishishtah Samaaroh' is Kautilya Vidyalaya's flagship inter-school fest inviting participation from over 25 schools in Mysuru. Designed to encourage healthy intellectual and artistic exchange, events ranged from classical debates and Sanskrit elocution to live robotics challenges.",
      "Judged by celebrated artists, university professors, and authors, the competitions witnessed spirited energy and camaraderie, establishing Kautilya Vidyalaya as a premier center for holistic student development.",
    ],
    highlights: [
      "Over 400 visiting participants competing across 14 event categories",
      "High-caliber parliamentary debates, classical vocal music, and rapid quizzes",
      "Grand Rolling Trophy awarded to the overall champion institution",
    ],
    learningOutcomes: [
      "Inter-school networking, competitive exposure, and mutual respect",
      "Large-scale event management and hospitality leadership by student volunteers",
    ],
    gallery: [
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-01.webp",
        caption: "Inaugural address welcoming participating schools from across Karnataka",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-02.webp",
        caption: "High-stakes inter-school debate championship in the main auditorium",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-03.webp",
        caption: "Student teams participating in the rapid-fire general knowledge quiz",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-04.webp",
        caption: "Art and design competition in progress with vibrant canvas paintings",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-05.webp",
        caption: "Extempore speaking finals highlighting articulate student orators",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-06.webp",
        caption: "Panel of distinguished judges evaluating creative performance entries",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-07.webp",
        caption: "Visiting school contingents interacting and exchanging ideas",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-08.webp",
        caption: "Announcement of results and presentation of the overall rolling trophy",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-09.webp",
        caption: "Kautilya students celebrating competitive spirit and sportsmanship",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-10.webp",
        caption: "Felicitation of category winners with medals and merit certificates",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-11.webp",
        caption: "Organizing committee student volunteers managing stage events smoothly",
        aspect: "landscape",
      },
      {
        url: "/images/events/vishishtah-samaaroh-competition/vishishtah-samaaroh-competition-12.webp",
        caption: "Dignitaries presenting the championship shield to the winning school",
        aspect: "landscape",
      },
    ],
  },
  {
    slug: "kute-krishnas-and-ravishing-radhas",
    title: "Kute Krishnas and Ravishing Radhas Celebration",
    shortTitle: "Krishna & Radha Fest",
    date: "September 2023",
    category: "Kindergarten & Cultural Festivities",
    location: "Open Air Amphitheatre",
    attendees: "Pre-Primary Children & Parents",
    coverImage: "/images/events/kautilya-krishna-radha-competition.webp",
    description:
      "A delightful festive celebration featuring kindergarten children adorned in traditional peacock feathers, flutes, and colorful silks.",
    detailedParagraphs: [
      "Celebrating Sri Krishna Janmashtami, the primary campus echoed with the laughter and charm of hundreds of tiny tots dressed as Lord Krishna and Radha. The festive setting was adorned with traditional flower rangolis, hanging butter pots (Uriyadi), and swings.",
      "Children performed gentle folk dance steps to traditional melodies, recited devotional couplets, and participated in fun butter-making activities, creating cherished memories for delighted parents and staff.",
    ],
    highlights: [
      "Adorable traditional dressing competition celebrating Indian mythology",
      "Playful butter-churning and decorative pot-painting activities",
      "Community singing of Krishna bhajans and classical folk dances",
    ],
    learningOutcomes: [
      "Cultural storytelling and familiarity with Indian cultural heritage",
      "Poise and delight in performing before enthusiastic parent audiences",
    ],
    gallery: [
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-01.webp",
        caption: "Kindergarten participants dressed in radiant Krishna and Radha attire",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-02.webp",
        caption: "Tiny Krishnas with ornate peacock feathers and traditional flutes",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-03.webp",
        caption: "Charming Radhas in colourful traditional lehengas and floral jewellery",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-04.webp",
        caption: "Adorable dance performances by pre-primary children on the festival stage",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-05.webp",
        caption: "Parents cheering enthusiastically for the creative mythological dress-ups",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-06.webp",
        caption: "Interactive stage questions and innocent dialogues by the little performers",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-07.webp",
        caption: "Celebration of cultural heritage and Indian classical storytelling",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-08.webp",
        caption: "Prize distribution for most creative costumes and expressive performance",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-09.webp",
        caption: "Children enjoying festive sweets and participating in group games",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-10.webp",
        caption: "Vibrant photo booth with butter pot props and peacock feather arches",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-11.webp",
        caption: "Mother Teachers assisting the tiny performers with warmth and care",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-12.webp",
        caption: "Group portrait of all participating Krishnas and Radhas together",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-13.webp",
        caption: "Joyous festive atmosphere spreading throughout the school campus",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-14.webp",
        caption: "Special appreciation certificates presented to all young participants",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-15.webp",
        caption: "Enthusiastic participation from visiting pre-schools across Mysuru",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-16.webp",
        caption: "Traditional musical accompaniment creating a festive devotional ambiance",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-17.webp",
        caption: "Memorable family portraits captured during the cultural celebration",
        aspect: "landscape",
      },
      {
        url: "/images/events/kute-krishnas-and-ravishing-radhas/kute-krishnas-and-ravishing-radhas-18.webp",
        caption: "Concluding celebration of innocence, cultural values, and festive joy",
        aspect: "landscape",
      },
    ],
  },
];

export function getEventBySlug(slug: string): EventDetail | undefined {
  return eventsDetailData.find((ev) => ev.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return eventsDetailData.map((ev) => ev.slug);
}
