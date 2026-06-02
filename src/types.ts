export interface Service {
  id: string;
  name: string;
  category: 'flooring' | 'carpentry' | 'drywall-paint' | 'general' | 'turf' | 'decks';
  description: string;
  benefits: string[];
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeDesc: string;
  afterDesc: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'flooring' | 'decks' | 'drywall-paint' | 'carpentry' | 'turf';
  imgUrl: string;
  images?: string[];
  description?: string;
  bulletPoints?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  serviceName: string;
  avatarUrl?: string;
}

export interface LeadMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
  date: string;
  status: 'pending' | 'reviewed';
}
