import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fieldBackground from "@/assets/background.png";

const Diseasepage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [cropName, setCropName] = useState("");
  const [mode, setMode] = useState<"upload" | "live" | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const startCamera = async () => {
    stopCamera(); // Stop any existing camera
    setSelectedImage(null);
    setMode("live");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (err) {
      console.error(err);
      alert("Camera access denied. Please allow camera.");
    }
  };

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setMode("upload");
      stopCamera();
    }
  };

  const handleDetect = () => {
    if (!selectedImage || !cropName) return;
    alert("Disease detection simulated!");
  };

  const handleReset = () => {
    setSelectedImage(null);
    setCropName("");
    setMode(null);
    stopCamera();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{
        backgroundImage: `url(${fieldBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Back Button */}
      <Button
        variant="outline"
        className="absolute top-4 left-4 bg-white/70 hover:bg-white text-green-800 border-green-600 z-20"
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>

      {/* Disease Detection Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl bg-white/90 rounded-3xl shadow-lg p-8 flex flex-col items-center space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-800">
          🌿 Disease Detection
        </h2>

        {!selectedImage && !mode && (
          <div className="flex flex-col sm:flex-row gap-4 w-full mt-6">
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

        {mode === "upload" && !selectedImage && (
          <div className="border-2 border-dashed border-green-400 p-10 rounded-xl text-center cursor-pointer hover:border-emerald-600 bg-green-50 w-full mt-6 relative">
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

        {mode === "live" && !selectedImage && (
          <div className="flex flex-col items-center w-full space-y-3 mt-6">
            <video
              ref={videoRef}
              className="w-full h-72 object-cover rounded-xl border border-green-400 shadow-md"
              autoPlay
              playsInline
            />
            <div className="flex gap-3 w-full">
              <Button
                onClick={capturePhoto}
                className="flex-1 bg-green-700 hover:bg-green-800 text-white"
              >
                Capture Photo
              </Button>
              <Button onClick={handleReset} variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        )}

        {selectedImage && (
          <div className="w-full flex flex-col items-center space-y-4 mt-6">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="w-full h-72 object-cover rounded-xl shadow-md border border-green-400"
            />
            <Input
              placeholder="Enter Crop Name"
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
              className="border-green-500 focus:border-emerald-600"
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
      </motion.div>
    </div>
  );
};

export default Diseasepage;
