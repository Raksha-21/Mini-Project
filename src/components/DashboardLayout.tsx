import { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Sprout,
  Cloud,
  Map,
  MessageSquare,
  ClipboardList,
  ScanSearch,
  Calendar,
  FileText,
  Flower2,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getTranslation } from '@/lib/translations';
import { Language } from '@/types';
import ChatbotButton from './ChatbotButton';
import growwiseLogo from '@/assets/growise-logo.png';

// Import the specific background image for the farmer dashboard
import fieldBackground from '@/assets/background.png'; 


interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout, language, setLanguage } = useAuth();
  const navigate = useNavigate();

  const farmerMenuItems = [
    { title: getTranslation('dashboard', language), icon: LayoutDashboard, path: '/dashboard' },
    { title: getTranslation('myCrops', language), icon: Sprout, path: '/dashboard/crops' },
    { title: getTranslation('weatherSoil', language), icon: Cloud, path: '/dashboard/weather' },
    { title: getTranslation('aiRoadmap', language), icon: Map, path: '/dashboard/roadmap' },
    { title: getTranslation('Schemes', language), icon: FileText, path: '/dashboard/Schemes' },
    { title: getTranslation('Disease detection', language), icon: MessageSquare, path: '/dashboard/Diseasepage' },
  ];

  const professionalGardenerMenuItems = [
    { title: getTranslation('dashboard', language), icon: LayoutDashboard, path: '/dashboard' },
    { title: getTranslation('plantInventory', language), icon: ClipboardList, path: '/dashboard/inventory' },
    { title: getTranslation('scanDetect', language), icon: ScanSearch, path: '/dashboard/scan' },
    { title: getTranslation('taskPlanner', language), icon: Calendar, path: '/dashboard/tasks' },
    { title: getTranslation('reports', language), icon: FileText, path: '/dashboard/reports' },
  ];

  const homeGardenerMenuItems = [
    { title: getTranslation('dashboard', language), icon: LayoutDashboard, path: '/dashboard' },
    { title: getTranslation('myPlants', language), icon: Flower2, path: '/dashboard/plants' },

    { title: getTranslation('detectDisease', language), icon: ScanSearch, path: '/dashboard/DetectDisease' },
    { title: getTranslation('reminders', language), icon: Bell, path: '/dashboard/reminders' },
    { title: getTranslation('calendar', language), icon: Calendar, path: '/dashboard/calendar' },
  ];

  const getMenuItems = () => {
    switch (user?.role) {
      case 'farmer':
        return farmerMenuItems;
      case 'professional_gardener':
        return professionalGardenerMenuItems;
      case 'home_gardener':
        return homeGardenerMenuItems;
      default:
        return [];
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sidebarHoverClass = `
    hover:bg-green-600 
    hover:text-white 
    transition-colors 
    duration-200 
    ease-in-out
    data-[state=active]:bg-green-700
    data-[state=active]:text-white
  `;
  
  const isFarmer = user?.role === 'farmer';
  
  const mainContentBackgroundStyle = isFarmer 
    ? { 
        backgroundImage: `url(${fieldBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' as const, 
        position: 'relative',
        zIndex: 0, 
      }
    : {};

  const farmerContentOverlay = isFarmer
    ? 'relative after:content-[""] after:absolute after:inset-0 after:bg-black/20 after:z-[-1]' 
    : '';

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarContent>
            {/* Logo */}
            <div className="p-4 flex items-center gap-3 border-b">
              <img src={growwiseLogo} alt="GrowWise" className="w-10 h-10 animate-pulse-slow" />
              <span className="font-bold text-xl text-primary animate-fadeIn">GROWISE</span>
            </div>

            {/* Menu Items */}
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {getMenuItems().map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton 
                        onClick={() => navigate(item.path)}
                        className={sidebarHoverClass} 
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Settings & Logout */}
            <SidebarGroup className="mt-auto">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => navigate('/dashboard/settings')}
                      className={sidebarHoverClass}
                    >
                      <Settings className="w-4 h-4" />
                      <span>{getTranslation('settings', language)}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={handleLogout}
                      className={sidebarHoverClass}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{getTranslation('logout', language)}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top navbar */}
          <header className="h-16 border-b bg-white/90 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h2 className="text-lg font-semibold text-gray-800">
                {getTranslation(user?.role === 'farmer' ? 'farmer' : 
                  user?.role === 'professional_gardener' ? 'professionalGardener' : 
                  'homeGardener', language)} Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Language selector */}
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-[120px] shadow-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                  <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
                </SelectContent>
              </Select>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 animate-wiggle" />
                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
              </Button>

              {/* Profile */}
              <Avatar className="cursor-pointer hover:ring-2 ring-primary transition-all duration-300">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user?.name?.[0] || 'U'}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Page content - APPLYING CONDITIONAL BACKGROUND & OVERLAY */}
          <main 
            className={`flex-1 overflow-auto p-6 ${farmerContentOverlay} ${isFarmer ? 'backdrop-blur-sm' : 'bg-gray-50'}`} 
             style={mainContentBackgroundStyle}
          >
            <div className="relative z-10 space-y-6"> 
              {children} 
            </div>
          </main>
        </div>

        {/* Floating chatbot */}
        <ChatbotButton />
      </div>
    </SidebarProvider>
  );
}