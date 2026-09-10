export interface DisclosureItem {
  slNo: number;
  information: string;
  detail: string;
  link?: string;
  linkText?: string;
  fileType?: "pdf" | "xlsx" | "video" | "external";
  category: "general" | "documents" | "academics" | "infrastructure";
}

export interface DisclosureCategory {
  id: "all" | "general" | "documents" | "academics" | "infrastructure";
  title: string;
  code: string;
}

export const disclosureCategories: DisclosureCategory[] = [
  { id: "all", title: "All", code: "ALL" },
  { id: "general", title: "General Information", code: "Sec A" },
  { id: "documents", title: "Documents & Information", code: "Sec B" },
  { id: "academics", title: "Result & Academics", code: "Sec C" },
  { id: "infrastructure", title: "School Infrastructure", code: "Sec D" },
];

export const generalInformationData: DisclosureItem[] = [
  {
    slNo: 1,
    information: "NAME OF THE SCHOOL",
    detail: "KAUTILYA VIDYALAYA",
    category: "general",
  },
  {
    slNo: 2,
    information: "AFFILIATION NO(If Applicable)",
    detail: "830193",
    category: "general",
  },
  {
    slNo: 3,
    information: "SCHOOL CODE(If Applicable)",
    detail: "45154",
    category: "general",
  },
  {
    slNo: 4,
    information: "COMPLETE ADDRESS WITH PIN CODE",
    detail: "#9/1, 13th Main, J Block, Kanakadasanagar, Dattagalli 3rd stage, Mysore-570033",
    category: "general",
    link: "https://maps.google.com/?q=Kautilya+Vidyalaya+Mysore",
    linkText: "Google Maps",
    fileType: "external",
  },
  {
    slNo: 5,
    information: "PRINCIPAL NAME & QUALIFICATION",
    detail: "Dr S Jayashree Muralidhar, M.Sc., Ph.D, B.Ed.",
    category: "general",
  },
  {
    slNo: 6,
    information: "SCHOOL EMAIL ID",
    detail: "info@kautilyavidyalaya.edu.in",
    link: "mailto:info@kautilyavidyalaya.edu.in",
    linkText: "info@kautilyavidyalaya.edu.in",
    fileType: "external",
    category: "general",
  },
  {
    slNo: 7,
    information: "CONTACT DETAILS",
    detail: "91-9900038350, +91-9900038358",
    link: "tel:+919900038358",
    linkText: "+91-9900038358",
    fileType: "external",
    category: "general",
  },
];

export const documentsData: DisclosureItem[] = [
  {
    slNo: 1,
    information: "COPIES OF AFFILIATION",
    detail: "CBSE Affiliation Grant Order",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Affiliation-copy.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 2,
    information: "COPIES OF TRUST DEED",
    detail: "Registered Trust Deed Copy",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Recent-Trust-Deed-copy.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 3,
    information: "COPIES OF NO OBJECTION CERTIFICATE (NOC) ISSUED IF ANY APPLICABLE BY THE STATE GOV/UT",
    detail: "State Govt NOC",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/3-NOC.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 4,
    information: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009 AND ITS RENEWAL IF APPLICABLE",
    detail: "RTE Recognition & Renewal Certificate",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/School-Recognition.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 5,
    information: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    detail: "Building Safety Certificate (NBC)",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Building-Safety.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 6,
    information: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    detail: "Fire Safety Clearance Certificate",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/6-FIRE-SAFETY.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 7,
    information: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATE BY SCHOOL",
    detail: "DEO Certificate / Grant Letter",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Grant-Letter-Affiliation.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 8,
    information: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATE",
    detail: "Water Quality & Sanitation Test Report",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Water-Sample-Test-Report.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 9,
    information: "SAMPLE TRANSFER CERTIFICATE",
    detail: "Sample TC Format",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/9-Transfer-Certificate-Format.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 10,
    information: "LAND CERTIFICATE",
    detail: "Registered Land Certificate",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Land-Certificate.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
  {
    slNo: 11,
    information: "MANAGEMENT MEMBERS",
    detail: "List of Committee Members",
    link: "https://kautilyavidyalaya.edu.in/committee-members/",
    linkText: "View Members",
    fileType: "external",
    category: "documents",
  },
  {
    slNo: 12,
    information: "SCHOOL DEVELOPMENT MANAGEMENT & COMMITTEE",
    detail: "SDMC Committee Document",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Affiliation-copy.pdf",
    linkText: "View Document",
    fileType: "pdf",
    category: "documents",
  },
];

export const academicsData: DisclosureItem[] = [
  {
    slNo: 1,
    information: "FEE STRUCTURE OF THE SCHOOL",
    detail: "Approved Annual Fee Structure",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2026/05/Fee-structure-for-website-3.xlsx",
    linkText: "Download Excel",
    fileType: "xlsx",
    category: "academics",
  },
  {
    slNo: 2,
    information: "CLASS X BOARD RESULTS (LAST THREE YEARS RESULTS)",
    detail: "Class X Results & Pass Analytics",
    link: "https://kautilyavidyalaya.edu.in/result-graph/",
    linkText: "View Results",
    fileType: "external",
    category: "academics",
  },
  {
    slNo: 3,
    information: "SCHOOL MANAGEMENT COMMITTEE (SMC)",
    detail: "SMC Members & Designations",
    link: "https://kautilyavidyalaya.edu.in/committee-members/",
    linkText: "View SMC",
    fileType: "external",
    category: "academics",
  },
  {
    slNo: 4,
    information: "TEACHERS DETAILS",
    detail: "Faculty Roster & Qualifications",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2025/06/teachers-details.pdf",
    linkText: "Download PDF",
    fileType: "pdf",
    category: "academics",
  },
  {
    slNo: 5,
    information: "TIME TABLE",
    detail: "Class Wise Academic Timetable",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2025/07/School-Timetable.pdf",
    linkText: "Download PDF",
    fileType: "pdf",
    category: "academics",
  },
  {
    slNo: 6,
    information: "ANNUAL ACADEMIC CALENDAR",
    detail: "Academic Year Calendar (KG - Grade 10)",
    link: "https://kautilyavidyalaya.edu.in/wp-content/uploads/2025/07/2025-2026-KV-Calendar-KG-10.pdf",
    linkText: "Download PDF",
    fileType: "pdf",
    category: "academics",
  },
];

export const infrastructureData: DisclosureItem[] = [
  {
    slNo: 1,
    information: "Total campus area of the school (in Square metre)",
    detail: "8093 Sq.m",
    category: "infrastructure",
  },
  {
    slNo: 2,
    information: "No. and size of the classrooms (in Square metre)",
    detail: "481.75 Sq.m",
    category: "infrastructure",
  },
  {
    slNo: 3,
    information: "No. and size of laboratories including computer labs (in Square metre)",
    detail: "6 Labs",
    category: "infrastructure",
  },
  {
    slNo: 4,
    information: "Internet Facility (Y/N)",
    detail: "Yes",
    category: "infrastructure",
  },
  {
    slNo: 5,
    information: "No. of Girls Toilets",
    detail: "15",
    category: "infrastructure",
  },
  {
    slNo: 6,
    information: "No. of Boys Toilets",
    detail: "20",
    category: "infrastructure",
  },
  {
    slNo: 7,
    information: "Link of youtube video of the inspection of school covering the infrastructure of the school",
    detail: "School Infrastructure Inspection Video",
    link: "https://www.youtube.com/shorts/emGoQ_-3Il8",
    linkText: "Watch Video",
    fileType: "video",
    category: "infrastructure",
  },
];

export const allDisclosureItems: DisclosureItem[] = [
  ...generalInformationData,
  ...documentsData,
  ...academicsData,
  ...infrastructureData,
];
