
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import SelectRole from "./pages/SelectRole";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
import MyCrops from "@/pages/dashboard/MyCrops";
=======
>>>>>>> 03068966043f81b5ece23c14272ab1e470420da6
import ScanPage from '@/pages/dashboard/ScanPage';
import PlantInventoryPage from "@/pages/dashboard/PlantInventoryPage";
import TaskPlanner from "@/pages/dashboard/TaskPlanner";
import Reports from '@/pages/dashboard/Reports';
import MyPlants from "@/pages/dashboard/MyPlants";
import Tips from '@/pages/dashboard/Tips';
<<<<<<< HEAD
import Schemes from '@/pages/dashboard/Schemes';
=======
>>>>>>> 03068966043f81b5ece23c14272ab1e470420da6

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
<<<<<<< HEAD

            <Route path="/dashboard/crops" element={<MyCrops />} />
            

=======
>>>>>>> 03068966043f81b5ece23c14272ab1e470420da6
            <Route path="/dashboard/scan" element={<ScanPage />} />
            <Route path="/dashboard/inventory" element={<PlantInventoryPage />} />
            <Route path="/dashboard/tasks" element={<TaskPlanner />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/plants" element={<MyPlants />} />
            <Route path="/dashboard/tips" element={<Tips />} />
<<<<<<< HEAD
            <Route path="/dashboard/Schemes" element={<Schemes/>}/>
=======
>>>>>>> 03068966043f81b5ece23c14272ab1e470420da6

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
