import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, AlertTriangle, CheckCircle, Activity } from 'lucide-react';
import { getTranslation } from '@/lib/translations';
import { Menu, X } from 'lucide-react';



export default function Dashboard() {
  const { user, language } = useAuth();

  const farmerStats = [
    { title: 'Active Crops', value: '12', icon: Activity, color: 'text-green-600' },
    { title: 'Healthy %', value: '85%', icon: CheckCircle, color: 'text-green-600' },
    { title: 'Need Attention', value: '3', icon: AlertTriangle, color: 'text-yellow-600' },
    { title: 'Growth Rate', value: '+12%', icon: TrendingUp, color: 'text-blue-600' },
  ];

  const professionalStats = [
    { title: 'Total Plants', value: '156', icon: Activity, color: 'text-green-600' },
    { title: 'Tasks Today', value: '8', icon: CheckCircle, color: 'text-blue-600' },
    { title: 'Pending Tasks', value: '5', icon: AlertTriangle, color: 'text-yellow-600' },
    { title: 'Completed', value: '92%', icon: TrendingUp, color: 'text-green-600' },
  ];

  const homeGardenerStats = [
    { title: 'My Plants', value: '24', icon: Activity, color: 'text-green-600' },
    { title: 'Healthy', value: '18', icon: CheckCircle, color: 'text-green-600' },
    { title: 'Need Care', value: '6', icon: AlertTriangle, color: 'text-yellow-600' },
    { title: 'Growth Rate', value: '+8%', icon: TrendingUp, color: 'text-blue-600' },
  ];

  const getStats = () => {
    switch (user?.role) {
      case 'farmer':
        return farmerStats;
      case 'professional_gardener':
        return professionalStats;
      case 'home_gardener':
        return homeGardenerStats;
      default:
        return [];
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="gradient-primary rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
              Welcome to Growise
          </h1>
          <p className="text-white/90">
            Here's an overview of your {user?.role?.replace('_', ' ')} dashboard
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getStats().map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Role-specific content */}
        {user?.role === 'farmer' && <FarmerDashboard />}
        {user?.role === 'professional_gardener' && <ProfessionalGardenerDashboard />}
        {user?.role === 'home_gardener' && <HomeGardenerDashboard />}
      </div>
    </DashboardLayout>
  );
}

function FarmerDashboard() {
  const { language } = useAuth();
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Weather Alert</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Rain predicted tomorrow - reduce watering schedule
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Temperature:</span>
              <span className="font-semibold">28°C</span>
            </div>
            <div className="flex justify-between">
              <span>Humidity:</span>
              <span className="font-semibold">75%</span>
            </div>
            <div className="flex justify-between">
              <span>Wind:</span>
              <span className="font-semibold">12 km/h</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <div>
                <p className="text-sm font-medium">Watering completed</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
              <div>
                <p className="text-sm font-medium">Disease detected in Plot A</p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <div>
                <p className="text-sm font-medium">Fertilizer applied</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ProfessionalGardenerDashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">Water orchids - Section B</p>
              <p className="text-xs text-muted-foreground">Today at 10:00 AM</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">Prune roses - Garden A</p>
              <p className="text-xs text-muted-foreground">Today at 2:00 PM</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">Disease inspection</p>
              <p className="text-xs text-muted-foreground">Tomorrow at 9:00 AM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Plant Health Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Excellent</span>
                <span className="text-sm font-semibold">45%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Good</span>
                <span className="text-sm font-semibold">35%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Needs Attention</span>
                <span className="text-sm font-semibold">20%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function HomeGardenerDashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Today's Care Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-medium text-green-900">Morning Watering</p>
              <p className="text-xs text-green-700 mt-1">
                Water your plants early in the morning for best absorption
              </p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900">Sunlight Check</p>
              <p className="text-xs text-blue-700 mt-1">
                Ensure your indoor plants get 4-6 hours of indirect sunlight
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Recent Plant Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                🌱
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Monstera</p>
                <p className="text-xs text-muted-foreground">New leaf growing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                🌸
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Rose Plant</p>
                <p className="text-xs text-muted-foreground">Blooming season started</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                🌿
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Snake Plant</p>
                <p className="text-xs text-muted-foreground">Watered 2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
