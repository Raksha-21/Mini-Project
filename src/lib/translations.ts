import { Translation } from '@/types';

export const translations: Translation = {
  // Auth translations
  login: {
    en: 'Login',
    hi: 'लॉगिन',
    kn: 'ಲಾಗಿನ್'
  },
  phone: {
    en: 'Phone Number',
    hi: 'फोन नंबर',
    kn: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ'
  },
  password: {
    en: 'Password',
    hi: 'पासवर्ड',
    kn: 'ಪಾಸ್‌ವರ್ಡ್'
  },
  confirmPassword: {
    en: 'Confirm Password',
    hi: 'पासवर्ड की पुष्टि करें',
    kn: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ'
  },
  newUser: {
    en: 'New User',
    hi: 'नया उपयोगकर्ता',
    kn: 'ಹೊಸ ಬಳಕೆದಾರ'
  },
  forgotPassword: {
    en: 'Forgot Password?',
    hi: 'पासवर्ड भूल गए?',
    kn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರುವಿರಾ?'
  },
  createUser: {
    en: 'Create User',
    hi: 'उपयोगकर्ता बनाएं',
    kn: 'ಬಳಕೆದಾರರನ್ನು ರಚಿಸಿ'
  },
  selectRole: {
    en: 'Select Your Role',
    hi: 'अपनी भूमिका चुनें',
    kn: 'ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ'
  },
  farmer: {
    en: 'Farmer',
    hi: 'किसान',
    kn: 'ರೈತ'
  },
  professionalGardener: {
    en: 'Professional Gardener',
    hi: 'पेशेवर माली',
    kn: 'ವೃತ್ತಿಪರ ತೋಟಗಾರ'
  },
  homeGardener: {
    en: 'Home Gardener',
    hi: 'घरेलू माली',
    kn: 'ಮನೆ ತೋಟಗಾರ'
  },
  // Validation messages
  invalidPhone: {
    en: 'Invalid phone number. Must be exactly 10 digits.',
    hi: 'अमान्य फ़ोन नंबर। ठीक 10 अंक होना चाहिए।',
    kn: 'ಅಮಾನ್ಯ ದೂರವಾಣಿ ಸಂಖ್ಯೆ. ನಿಖರವಾಗಿ 10 ಅಂಕೆಗಳು ಇರಬೇಕು.'
  },
  passwordMismatch: {
    en: 'Passwords do not match.',
    hi: 'पासवर्ड मेल नहीं खाते।',
    kn: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.'
  },
  weakPassword: {
    en: 'Password must contain both letters and numbers.',
    hi: 'पासवर्ड में अक्षर और संख्याएँ दोनों होने चाहिए।',
    kn: 'ಪಾಸ್‌ವರ್ಡ್ ಅಕ್ಷರಗಳು ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಒಳಗೊಂಡಿರಬೇಕು.'
  },
  userCreated: {
    en: 'User created successfully!',
    hi: 'उपयोगकर्ता सफलतापूर्वक बनाया गया!',
    kn: 'ಬಳಕೆದಾರರನ್ನು ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ!'
  },
  otpSent: {
    en: 'OTP sent successfully to',
    hi: 'OTP सफलतापूर्वक भेजा गया',
    kn: 'OTP ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ'
  },
  // Dashboard common
  dashboard: {
    en: 'Dashboard',
    hi: 'डैशबोर्ड',
    kn: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'
  },
  settings: {
    en: 'Settings',
    hi: 'सेटिंग्स',
    kn: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು'
  },
  logout: {
    en: 'Logout',
    hi: 'लॉगआउट',
    kn: 'ಲಾಗ್ಔಟ್'
  },
  notifications: {
    en: 'Notifications',
    hi: 'सूचनाएं',
    kn: 'ಅಧಿಸೂಚನೆಗಳು'
  },
  // Farmer specific
  myCrops: {
    en: 'My Crops',
    hi: 'मेरी फसलें',
    kn: 'ನನ್ನ ಬೆಳೆಗಳು'
  },
  weatherSoil: {
    en: 'Weather & Soil',
    hi: 'मौसम और मिट्टी',
    kn: 'ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣು'
  },
  aiRoadmap: {
    en: 'AI Roadmap',
    hi: 'AI रोडमैप',
    kn: 'AI ಮಾರ್ಗಸೂಚಿ'
  },
  voiceChatbot: {
    en: 'Voice Chatbot',
    hi: 'आवाज़ चैटबॉट',
    kn: 'ಧ್ವನಿ ಚಾಟ್‌ಬಾಟ್'
  },
  // Professional Gardener specific
  plantInventory: {
    en: 'Plant Inventory',
    hi: 'पौधे की सूची',
    kn: 'ಸಸ್ಯ ದಾಸ್ತಾನು'
  },
  scanDetect: {
    en: 'Scan & Detect',
    hi: 'स्कैन और पहचान',
    kn: 'ಸ್ಕ್ಯಾನ್ ಮತ್ತು ಪತ್ತೆ'
  },
  taskPlanner: {
    en: 'Task Planner',
    hi: 'कार्य योजनाकार',
    kn: 'ಕಾರ್ಯ ಯೋಜಕ'
  },
  aiAssistant: {
    en: 'AI Assistant',
    hi: 'AI सहायक',
    kn: 'AI ಸಹಾಯಕ'
  },
  reports: {
    en: 'Reports',
    hi: 'रिपोर्ट',
    kn: 'ವರದಿಗಳು'
  },
  // Home Gardener specific
  myPlants: {
    en: 'My Plants',
    hi: 'मेरे पौधे',
    kn: 'ನನ್ನ ಸಸ್ಯಗಳು'
  },
  detectDisease: {
    en: 'Detect Disease',
    hi: 'बीमारी का पता लगाएं',
    kn: 'ರೋಗವನ್ನು ಪತ್ತೆಮಾಡಿ'
  },
  tips: {
    en: 'Tips',
    hi: 'सुझाव',
    kn: 'ಸಲಹೆಗಳು'
  },
  reminders: {
    en: 'Reminders',
    hi: 'अनुस्मारक',
    kn: 'ಜ್ಞಾಪನೆಗಳು'
  },
  calendar: {
    en: 'Calendar',
    hi: 'कैलेंडर',
    kn: 'ಕ್ಯಾಲೆಂಡರ್'
  },
  welcome: {
    en: 'Welcome to GrowWise',
    hi: 'GrowWise में आपका स्वागत है',
    kn: 'GrowWise ಗೆ ಸ್ವಾಗತ'
  },
  enterOtp: {
    en: 'Enter OTP',
    hi: 'OTP दर्ज करें',
    kn: 'OTP ನಮೂದಿಸಿ'
  },
  resetPassword: {
    en: 'Reset Password',
    hi: 'पासवर्ड रीसेट करें',
    kn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ'
  },
  sendOtp: {
    en: 'Send OTP',
    hi: 'OTP भेजें',
    kn: 'OTP ಕಳುಹಿಸಿ'
  },
  verifyOtp: {
    en: 'Verify OTP',
    hi: 'OTP सत्यापित करें',
    kn: 'OTP ಪರಿಶೀಲಿಸಿ'
  }
};

export const getTranslation = (key: string, language: string): string => {
  return translations[key]?.[language as keyof Translation[string]] || key;
};
