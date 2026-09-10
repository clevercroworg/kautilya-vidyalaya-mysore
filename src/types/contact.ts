export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface DepartmentContact {
  department: string;
  phones: string[];
  email: string;
  timing: string;
}

export interface OfficeHours {
  days: string;
  timing: string;
  note?: string;
}

export interface ContactData {
  institutionName: string;
  affiliationNumber: string;
  schoolCode: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
    directionsUrl: string;
  };
  phones: ContactChannel[];
  emails: ContactChannel[];
  socialLinks: {
    whatsapp: string;
    youtube: string;
    facebook: string;
    instagram: string;
  };
  officeHours: OfficeHours[];
  googleMapsEmbedUrl: string;
}
