import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Leaf, Globe } from 'lucide-react';
import { getTranslation } from '@/lib/translations';
import { Language } from '@/types';
import growwiseLogo from '@/assets/growise-logo.png';

export default function Login() {
  const { setLanguage, language } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showNewUser, setShowNewUser] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const validatePhone = (phoneNumber: string): boolean => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const validatePassword = (pwd: string): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d).+$/.test(pwd);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || !password) {
      toast.error(getTranslation('Please fill the fields', language), { position: 'top-center' });
      return;
    }

    if (!validatePhone(phone)) {
      toast.error(getTranslation('invalidPhone', language), { position: 'top-center' });
      return;
    }

    if (!validatePassword(password)) {
      toast.error(getTranslation('weakPassword', language), { position: 'top-center' });
      return;
    }

    navigate('/select-role');
  };

  return (
    <div className="min-h-screen gradient-soft flex items-center justify-center relative overflow-hidden p-4">
      {/* Floating leaf animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-20 left-10 text-primary/20 w-16 h-16 animate-float" />
        <Leaf className="absolute top-40 right-20 text-accent/20 w-12 h-12 animate-float" style={{ animationDelay: '2s' }} />
        <Leaf className="absolute bottom-20 left-1/4 text-primary/20 w-20 h-20 animate-float" style={{ animationDelay: '4s' }} />
        <Leaf className="absolute bottom-40 right-1/3 text-accent/20 w-14 h-14 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Language selector */}
      <div className="absolute top-4 right-4 z-50">
        <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
          <SelectTrigger className="w-[140px] bg-white/90 backdrop-blur">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hi">हिन्दी</SelectItem>
            <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main login card */}
      <div className="w-full max-w-sm md:max-w-md mx-auto">
        <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Logo and title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img src={growwiseLogo} alt="Growise" className="w-24 h-25" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">GROWISE</h1>

          <p className="text-muted-foreground text-center text-sm font-medium">
  AI driven Smart Gardening and<br />  farming assistance
</p>


          </div>

          {!showNewUser && !showForgotPassword && (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">{getTranslation('phone', language)}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10 digit number"
                  maxLength={10}
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{getTranslation('password', language)}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white"
                />
              </div>

              <Button type="submit" className="w-full gradient-primary text-white">
                {getTranslation('login', language)}
              </Button>

            <div className="text-center mt-4 text-sm">
  <button
    type="button"
    onClick={() => setShowForgotPassword(true)}
    className="text-green-600 hover:underline"
  >
    {getTranslation('forgotPassword', language)}
  </button>
  <span className="mx-2 text-gray-400">|</span>
  <button
    type="button"
    onClick={() => setShowNewUser(true)}
    className="text-green-600 hover:underline"
  >
    {getTranslation('newUser', language)}
  </button>
</div>
  
            </form>
          )}

          {showNewUser && <NewUserForm onBack={() => setShowNewUser(false)} />}
          {showForgotPassword && <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />}
        </div>
      </div>
    </div>
  );
}

function NewUserForm({ onBack }: { onBack: () => void }) {
  const { language } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePhone = (phoneNumber: string): boolean => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const validatePassword = (pwd: string): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d).+$/.test(pwd);
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      toast.error(getTranslation('invalidPhone', language), { position: 'top-center' });
      return;
    }

    if (!validatePassword(password)) {
      toast.error(getTranslation('weakPassword', language), { position: 'top-center' });
      return;
    }

    if (password !== confirmPassword) {
      toast.error(getTranslation('passwordMismatch', language), { position: 'top-center' });
      return;
    }

    toast.success(getTranslation('userCreated', language), { position: 'top-center' });
    setTimeout(onBack, 1500);
  };

  return (
    <form onSubmit={handleCreateUser} className="space-y-6">
      <h2 className="text-xl font-semibold text-center">{getTranslation('newUser', language)}</h2>
      
      <div className="space-y-2">
        <Label htmlFor="new-phone">{getTranslation('phone', language)}</Label>
        <Input
          id="new-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
          className="bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="new-password">{getTranslation('password', language)}</Label>
        <Input
          id="new-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">{getTranslation('confirmPassword', language)}</Label>
        <Input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-white"
        />
      </div>

      <div className="flex gap-2">
        <Button type="button" variant="outline" className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="flex-1 gradient-primary text-white">
          {getTranslation('createUser', language)}
        </Button>
      </div>
    </form>
  );
}

function ForgotPasswordForm({ onBack }: { onBack: () => void }) {
  const { language } = useAuth();
  const [step, setStep] = useState<'phone' | 'otp' | 'password'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePhone = (phoneNumber: string): boolean => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      toast.error(getTranslation('invalidPhone', language), { position: 'top-center' });
      return;
    }
    toast.success(`${getTranslation('otpSent', language)} ${phone}`, { position: 'top-center' });
    setStep('otp');
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
       toast.error('Enter valid 6-digit OTP', { position: 'top-center' });
    return;
  }
      setStep('password');
    
  };

  const validatePassword = (pwd: string): boolean => {
  return /^(?=.*[A-Za-z])(?=.*\d).+$/.test(pwd);
};

const handleResetPassword = (e: React.FormEvent) => {
  e.preventDefault();

  if (!validatePassword(newPassword)) {
    toast.error('Password must contain letters and numbers', { position: 'top-center' });
    return;
  }

  if (newPassword !== confirmPassword) {
    toast.error('Password not matched', { position: 'top-center' });
    return;
  }

  toast.success('Password reset successfully', { position: 'top-center' });
  setTimeout(onBack, 1500);
};


  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center">{getTranslation('forgotPassword', language)}</h2>
      
      {step === 'phone' && (
        <form onSubmit={handleSendOTP} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="forgot-phone">{getTranslation('phone', language)}</Label>
            <Input
              id="forgot-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
              className="bg-white"
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" className="flex-1" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" className="flex-1 gradient-primary text-white">
              {getTranslation('sendOtp', language)}
            </Button>
          </div>
        </form>
      )}

      {step === 'otp' && (
        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">{getTranslation('enterOtp', language)}</Label>
            <Input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="bg-white"
            />
          </div>
          <Button type="submit" className="w-full gradient-primary text-white">
            {getTranslation('verifyOtp', language)}
          </Button>
        </form>
      )}

      {step === 'password' && (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-pwd">{getTranslation('password', language)}</Label>
            <Input
              id="new-pwd"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-pwd">{getTranslation('confirmPassword', language)}</Label>
            <Input
              id="confirm-pwd"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white"
            />
          </div>
          <Button type="submit" className="w-full gradient-primary text-white">
            {getTranslation('resetPassword', language)}
          </Button>
        </form>
      )}
    </div>
  );
}
