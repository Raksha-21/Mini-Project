import React, { useState, useRef } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Diseasepage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [cropName, setCropName] = useState("");
  const [mode, setMode] = useState<"upload" | "live" | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Start live camera
  const startCamera = async () => {
    setMode("live");
    setSelectedImage(null);
    if (videoRef.current && !videoRef.current.srcObject) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
        setStream(mediaStream);
      } catch (err) {
        alert("Camera access denied. Please allow camera.");
      }
    }
  };

  // Capture photo from camera
  const capturePhoto = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        setSelectedImage(new File([blob], "captured.png", { type: "image/png" }));
        stopCamera();
      }
    });
  };

  // Stop live camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const mediaStream = videoRef.current.srcObject as MediaStream;
      mediaStream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setStream(null);
    if (mode === "live") setMode("upload");
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setMode("upload");
      stopCamera();
    }
  };

  // Placeholder for disease detection (replace with backend call)
  const handleDetect = async () => {
    if (!selectedImage || !cropName) return;
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("crop_name", cropName);

    try {
      const res = await fetch("/api/detect-disease", { method: "POST", body: formData });
      const data = await res.json();
      alert(data.message || "Detection complete!");
    } catch (err) {
      console.error(err);
      alert("Error detecting disease");
    }
  };

  // Reset everything
  const handleReset = () => {
    setSelectedImage(null);
    setCropName("");
    setMode(null);
    stopCamera();
  };

  return (
    <DashboardLayout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-green-50 p-6">
        <div className="rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-2xl bg-white border border-green-300 flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-green-800">
            🌿 Disease Detection
          </h2>

          {/* Options */}
          {!selectedImage && (
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                onClick={() => setMode("upload")}
                className="flex-1 bg-green-700 hover:bg-green-800 text-white"
              >
                Upload Image
              </Button>
              <Button
                onClick={startCamera}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white"
              >
                Live Capture
              </Button>
            </div>
          )}

          {/* Upload Box */}
          {mode === "upload" && !selectedImage && (
            <div className="border-2 border-dashed border-green-400 p-10 rounded-xl text-center cursor-pointer hover:border-emerald-600 bg-green-50 w-full relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <p className="text-green-800 font-semibold text-lg">
                Click here to upload an image
              </p>
            </div>
          )}

          {/* Live Camera */}
          {mode === "live" && !selectedImage && (
            <div className="flex flex-col items-center w-full space-y-3">
              <video
                ref={videoRef}
                className="w-full h-72 object-cover rounded-xl border border-green-400 shadow-md"
                autoPlay
                playsInline
              />
              <Button
                onClick={capturePhoto}
                className="w-full bg-green-700 hover:bg-green-800 text-white"
              >
                Capture Photo
              </Button>
            </div>
          )}

          {/* Selected Image */}
          {selectedImage && (
            <div className="w-full flex flex-col items-center space-y-4">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-72 object-cover rounded-xl shadow-md border border-green-400"
              />
              <Input
                placeholder="Enter Crop Name"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                className="mt-2 border-green-500 focus:border-emerald-600"
              />
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                <Button
                  onClick={handleDetect}
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                  disabled={!cropName}
                >
                  Detect Disease
                </Button>
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Diseasepage;
