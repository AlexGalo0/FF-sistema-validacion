import { useState } from "react";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("Esperando archivo");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus("Esperando archivo");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:3000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("Subida exitosa");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl pb-5 font-semibold">Bienvenido</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Subir Excel
          </button>
        </form>
        <label className="mt-4 block">
          Estado de la subida: {uploadStatus}
        </label>
      </div>
    </div>
  );
};
export default FileUpload;