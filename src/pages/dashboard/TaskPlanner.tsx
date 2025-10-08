import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

// Dummy plant inventory (backend will replace this)
const plantInventory = [
  { id: 1, name: "Rose", section: "Garden A" },
  { id: 2, name: "Hibiscus", section: "Garden B" },
  { id: 3, name: "Mango", section: "Section C" },
];

interface Task {
  id: number;
  taskName: string;
  plantId: number;
  plantName: string;
  section: string;
  date: string;
  time: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
}

export default function TaskPlanner() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newPlantId, setNewPlantId] = useState<number>(plantInventory[0].id);
  const [newPriority, setNewPriority] = useState<"Low" | "Medium" | "High">("Medium");

  // Add task
  const addTask = () => {
    const plant = plantInventory.find((p) => p.id === newPlantId);
    if (!newTaskName || !plant) return;

    const newTask: Task = {
      id: Date.now(),
      taskName: newTaskName,
      plantId: plant.id,
      plantName: plant.name,
      section: plant.section,
      date: new Date().toISOString().split("T")[0],
      time: "10:00 AM", // default, can be extended
      priority: newPriority,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTaskName("");
    setNewPlantId(plantInventory[0].id);

    // Backend integration placeholder
    // fetch("/api/tasks/add", { method: "POST", body: JSON.stringify(newTask) });
  };

  // Mark task completed
  const toggleComplete = (taskId: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );

    // Backend integration placeholder
    // fetch(`/api/tasks/complete/${taskId}`, { method: "POST" });
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        {/* Back button */}
        <Button variant="outline" onClick={() => navigate("/dashboard")}>
          ← Back
        </Button>

        <h2 className="text-2xl font-bold">🌿 Task Planner</h2>

        {/* Add Task */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Input
            placeholder="Task Name (e.g., Water Plant)"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <select
            className="border rounded p-2"
            value={newPlantId}
            onChange={(e) => setNewPlantId(Number(e.target.value))}
          >
            {plantInventory.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <select
            className="border rounded p-2"
            value={newPriority}
            onChange={(e) =>
              setNewPriority(e.target.value as "Low" | "Medium" | "High")
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <Button onClick={addTask}>Add Task</Button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 border rounded flex justify-between items-center ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <div>
                <p className="font-semibold">{task.taskName} - {task.plantName}</p>
                <p className="text-sm">
                  Section: {task.section} | {task.date} {task.time} | Priority: {task.priority}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={task.completed ? "outline" : "default"}
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed ? "Undo" : "Done"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
