export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  timing?: string;
  description: string;
  points: string[];
}

export interface SafetyProtocolItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface FacilitiesData {
  pageTitle: string;
  pageSubtitle: string;
  facilities: FacilityItem[];
  safetyProtocols: SafetyProtocolItem[];
}
