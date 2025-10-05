import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User, UserRole, Language } from '@/types';

interface AuthContextType extends AuthState {
  login: (phone: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  setLanguage: (lang: Language) => void;
  register: (phone: string, password: string) => Promise<boolean>;
  resetPassword: (phone: string, otp: string, newPassword: string) => Promise<boolean>;
  sendOTP: (phone: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem('growwise_user');
    const storedLang = localStorage.getItem('growwise_language');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (storedLang) {
      setLanguageState(storedLang as Language);
    }
  }, []);

  const login = async (phone: string, password: string, role: UserRole): Promise<boolean> => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      phone,
      role,
      name: 'User',
      createdAt: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('growwise_user', JSON.stringify(mockUser));
    return true;
  };

  const register = async (phone: string, password: string): Promise<boolean> => {
    // Simulate registration
    return true;
  };

  const sendOTP = async (phone: string): Promise<boolean> => {
    // Simulate OTP sending
    return true;
  };

  const resetPassword = async (phone: string, otp: string, newPassword: string): Promise<boolean> => {
    // Simulate password reset
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('growwise_user');
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('growwise_language', lang);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        language,
        login,
        logout,
        setLanguage,
        register,
        resetPassword,
        sendOTP
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
