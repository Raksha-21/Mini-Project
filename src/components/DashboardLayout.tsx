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
  History,
  Cloud,
  Map,
  MessageSquare,
  ClipboardList,
  ScanSearch,
  Calendar,
  Bot,
  FileText,
  Flower2,
  Lightbulb,
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

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout, language, setLanguage } = useAuth();
  const navigate = useNavigate();

  const farmerMenuItems = [
    { title: getTranslation('dashboard', language), icon: LayoutDashboard, path: '/dashboard' },
    { title: getTranslation('myCrops', language), icon: Sprout, path: '/dashboard/crops' },
    { title: 'History', icon: History, path: '/dashboard/history' },
    { title: getTranslation('weatherSoil', language), icon: Cloud, path: '/dashboard/weather' },
    { title: getTranslation('aiRoadmap', language), icon: Map, path: '/dashboard/roadmap' },
    { title: getTranslation('voiceChatbot', language), icon: MessageSquare, path: '/dashboard/chatbot' },
  ];

  const professionalGardenerMenuItems = [
    { title: getTranslation('dashboard', language), icon: LayoutDashboard, path: '/dashboard' },
    { title: getTranslation('plantInventory', language), icon: ClipboardList, path: '/dashboard/inventory' },
    { title: getTranslation('scanDetect', language), icon: ScanSearch, path: '/dashboard/scan' },
    { title: getTranslation('taskPlanner', language), icon: Calendar, path: '/dashboard/tasks' },
    { title: getTranslation('aiAssistant', language), icon: Bot, path: '/dashboard/assistant' },
    { title: getTranslation('reports', language), icon: FileText, path: '/dashboard/reports' },
  ];

  const homeGardenerMenuItems = [
    { title: getTranslation('dashboard', language), icon: LayoutDashboard, path: '/dashboard' },
    { title: getTranslation('myPlants', language), icon: Flower2, path: '/dashboard/plants' },
    { title: getTranslation('detectDisease', language), icon: ScanSearch, path: '/dashboard/detect' },
    { title: getTranslation('tips', language), icon: Lightbulb, path: '/dashboard/tips' },
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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarContent>
            {/* Logo */}
            <div className="p-4 flex items-center gap-3 border-b">
              <img src={growwiseLogo} alt="GrowWise" className="w-10 h-10" />
              <span className="font-bold text-xl text-primary">GROWISE</span>
            </div>

            {/* Menu Items */}
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {getMenuItems().map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton onClick={() => navigate(item.path)}>
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
                    <SidebarMenuButton onClick={() => navigate('/dashboard/settings')}>
                      <Settings className="w-4 h-4" />
                      <span>{getTranslation('settings', language)}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout}>
                      <LogOut className="w-4 h-4" />
                      <span>{getTranslation('logout', language)}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top navbar */}
          <header className="h-16 border-b bg-white flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h2 className="text-lg font-semibold">
                {getTranslation(user?.role === 'farmer' ? 'farmer' : 
                  user?.role === 'professional_gardener' ? 'professionalGardener' : 
                  'homeGardener', language)}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Language selector */}
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                  <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
                </SelectContent>
              </Select>

              {/* Notifications */}
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>

              {/* Profile */}
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user?.name?.[0] || 'U'}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-auto gradient-soft p-6">
            {children}
          </main>
        </div>

        {/* Floating chatbot */}
        <ChatbotButton />
      </div>
    </SidebarProvider>
  );
}
