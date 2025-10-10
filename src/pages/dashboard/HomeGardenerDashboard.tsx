import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flower2, ScanSearch, Bell, Calendar } from 'lucide-react';

const HomeGardenerDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-green-700 mb-6">Welcome to Your Garden!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex items-center gap-2">
            <Flower2 className="w-6 h-6 text-green-600" />
            <CardTitle>My Plants</CardTitle>
          </CardHeader>
          <CardContent>
            View all your plants and check their growth progress.
          </CardContent>
          <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">Go</Button>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex items-center gap-2">
            <ScanSearch className="w-6 h-6 text-green-600" />
            <CardTitle>Disease Detection</CardTitle>
          </CardHeader>
          <CardContent>
            Detect plant diseases using images and get AI-based recommendations.
          </CardContent>
          <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">Detect</Button>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex items-center gap-2">
            <Bell className="w-6 h-6 text-green-600" />
            <CardTitle>Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            Set watering, fertilization, and other reminders for your plants.
          </CardContent>
          <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">View</Button>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-green-600" />
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            Track gardening tasks, planting schedules, and seasonal advice.
          </CardContent>
          <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">Open</Button>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-xl font-semibold text-green-700 mb-3">Gardening Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Water your plants early in the morning for better absorption.</li>
          <li>Check soil fertility every month and add compost if needed.</li>
          <li>Prune plants regularly to promote healthy growth.</li>
          <li>Keep an eye on plant health and detect diseases early.</li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default HomeGardenerDashboard;
