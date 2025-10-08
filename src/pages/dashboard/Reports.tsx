import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reports() {
  const navigate = useNavigate();

  // Dummy data (replace with backend data later)
  const plantHealth = [
    { label: "Healthy", value: 60, color: "bg-green-500" },
    { label: "Needs Attention", value: 25, color: "bg-yellow-500" },
    { label: "Diseased", value: 15, color: "bg-red-500" },
  ];

  const tasksReport = [
    { title: "Completed Tasks", value: 45 },
    { title: "Pending Tasks", value: 10 },
    { title: "Missed Tasks", value: 5 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>

        <h1 className="text-2xl font-bold text-green-800">🌿 Professional Gardener Reports</h1>

        {/* Plant Health */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Plant Health Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {plantHealth.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className={item.color} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tasks Report */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Tasks Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {tasksReport.map((task) => (
              <div key={task.title} className="flex justify-between text-sm">
                <span>{task.title}</span>
                <span>{task.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Future Analytics / Treatment Reports */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Disease & Treatment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Placeholder for disease detection trends, treatment applied, and effectiveness. Backend can provide this data later.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
