
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import SelectRole from "./pages/SelectRole";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import MyCrops from "@/pages/dashboard/MyCrops";
import ScanPage from '@/pages/dashboard/ScanPage';
import PlantInventoryPage from "@/pages/dashboard/PlantInventoryPage";
import TaskPlanner from "@/pages/dashboard/TaskPlanner";
import Reports from '@/pages/dashboard/Reports';
import MyPlants from "@/pages/dashboard/MyPlants";
import Tips from '@/pages/dashboard/Tips';
import AIroadmap from '@/pages/dashboard/AIRoadmap';
import Schemes from '@/pages/dashboard/Schemes';
import Diseasepage from "@/pages/dashboard/Diseasepage";
import DetectDisease from "@/pages/dashboard/DetectDisease";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/dashboard" element={<Dashboard />} />



            <Route path="/dashboard/crops" element={<MyCrops />} />
        
            <Route path="/dashboard/scan" element={<ScanPage />} />
            <Route path="/dashboard/inventory" element={<PlantInventoryPage />} />
            <Route path="/dashboard/tasks" element={<TaskPlanner />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/plants" element={<MyPlants />} />
            <Route path="/dashboard/tips" element={<Tips />} />
            <Route path="/dashboard/roadmap" element={<AIroadmap />} />
            <Route path="/dashboard/Schemes" element={<Schemes/>}/>
           <Route path="/dashboard/diseasepage" element={<Diseasepage/>} />
            <Route path="/dashboard/detect-disease" element={<DetectDisease/>} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
