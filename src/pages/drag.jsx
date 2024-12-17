import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const DragDropUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
    <div className=" bg-zinc-800  rounded-lg h-fit text-white">
    <h1 className="text-2xl text-center font-bold mt-2">Decompose Food</h1>
    <div className="flex justify-center items-center h-96">
      {/* Upload Box Container */}
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg w-96">
        {/* Image at the top */}
        <div className="flex justify-center mb-4">
          <img
            src="./src/images/upload.png" // You can replace this with the URL of your "bucket" image
            alt="Bucket Icon"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Upload box with drag-and-drop functionality */}
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center cursor-pointer border-2 border-dashed rounded-lg p-6 w-full bg-zinc-700 ${
            isDragActive ? "bg-zinc-600" : ""
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-zinc-400 mb-4">Drag & drop files here, or</p>
          <button className="bg-zinc-500 text-zinc-100 py-2 px-4 rounded-lg hover:bg-zinc-400 transition-colors">
            Browse Files
          </button>
        </div>

        {/* Uploaded files list */}
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium text-zinc-300">Uploaded Files:</h4>
            <ul className="list-disc list-inside">
              {files.map((file) => (
                <li key={file.name} className="text-zinc-200">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default DragDropUpload;
