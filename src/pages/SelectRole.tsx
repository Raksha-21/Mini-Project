import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Tractor, Briefcase, Home } from 'lucide-react';
import { getTranslation } from '@/lib/translations';
import { UserRole } from '@/types';

export default function SelectRole() {
  const { language, login } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = async (role: UserRole) => {
    await login('1234567890', 'pass123', role);
    navigate('/dashboard');
  };

  const roles = [
    {
      role: 'farmer' as UserRole,
      icon: Tractor,
      title: getTranslation('farmer', language),
      description: 'Manage crops, weather, and AI roadmap'
    },
    {
      role: 'professional_gardener' as UserRole,
      icon: Briefcase,
      title: getTranslation('professionalGardener', language),
      description: 'Inventory, tasks, and reports'
    },
    {
      role: 'home_gardener' as UserRole,
      icon: Home,
      title: getTranslation('homeGardener', language),
      description: 'Care for your plants and garden'
    }
  ];

  return (
    <div className="min-h-screen gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-primary mb-2">
          {getTranslation('selectRole', language)}
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Choose your role to get started
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map(({ role, icon: Icon, title, description }) => (
            <Card
              key={role}
              className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105 bg-white"
              onClick={() => handleRoleSelect(role)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
