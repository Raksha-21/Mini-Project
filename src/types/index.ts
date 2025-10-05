export type UserRole = 'farmer' | 'professional_gardener' | 'home_gardener';

export type Language = 'en' | 'hi' | 'kn';

export interface User {
  id: string;
  phone: string;
  role: UserRole;
  name?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  language: Language;
}

export interface Translation {
  [key: string]: {
    en: string;
    hi: string;
    kn: string;
  };
}
