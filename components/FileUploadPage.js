import React, { useState } from "react";

const FileUploadPage = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles(uploadedFiles);
    };

    const handleSubmit = () => {
        if (files.length > 0) {
            localStorage.setItem("uploadedFiles", JSON.stringify(files.map(file => file.name))); // ✅ Store filenames
            alert("Files uploaded successfully!");
        } else {
            alert("No files selected!");
        }
    };

    return (
        <div className="upload-container">
            <h2>Upload Your Files</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleSubmit}>Submit</button> {/* ✅ Ensure this button appears */}
        </div>
    );
};

export default FileUploadPage;
