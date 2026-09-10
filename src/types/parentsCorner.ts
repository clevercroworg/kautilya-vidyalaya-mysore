export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  tags: string[];
}

export interface ParentPerspectiveItem {
  id: string;
  parentName: string;
  relation: string;
  youtubeId: string;
  thumbnail?: string;
  highlights: string[];
  quote: string;
}

export interface GradeFeeItem {
  slNo: number;
  grade: string;
  band: string;
  tuitionFee: number;
  academicFee: number;
  totalFee: number;
  features?: string[];
}

export interface BankDetails {
  accountName: string;
  bankName: string;
  branch: string;
  accountType: string;
  paymentModes: string[];
}

export interface FeeStructureData {
  academicYear: string;
  title: string;
  currency: string;
  onlinePaymentUrl: string;
  admissionHelplines: string[];
  gradeFees: GradeFeeItem[];
  paymentGuidelines: string[];
  bankDetails: BankDetails;
}

export interface BrochureSection {
  title: string;
  desc: string;
}

export interface BrochureData {
  title: string;
  academicYear: string;
  pdfUrl: string;
  fileSize: string;
  lastUpdated: string;
  coverImage: string;
  overview: string;
  highlights: string[];
  brochureSections: BrochureSection[];
  contactInfo?: {
    phone: string[];
    email: string;
    address: string;
  };
}
