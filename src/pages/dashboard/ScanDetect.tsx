import React, { useState } from "react";

const ScanDetect = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Scan & Detect</h2>
      <p className="text-gray-600 mb-4">
        Upload a crop image to detect its health or possible diseases.
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />
      {selectedFile && (
        <div className="mt-4">
          <p>Selected: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            className="mt-2 w-64 h-64 object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ScanDetect;
