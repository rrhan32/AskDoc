import React, { useState } from 'react';

export default function PdfUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // Initial upload status
  const [errorMessage, setErrorMessage] = useState(null);
  const formData = new FormData();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    // Validate file type
    if (!file.type.startsWith('application/pdf')) {
      setErrorMessage('Please select a PDF file');
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    
    setUploadStatus('idle'); // Reset upload status on file change
    setErrorMessage(null); // Clear any previous errors
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('Please select a PDF file to upload');
      return;
    }

    setUploadStatus('uploading'); // Update upload status

    try {
      // Replace with your actual API endpoint (assuming a POST request)
      formData.append('file', selectedFile); // Add file to FormData
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData, // Use FormData for efficient file uploads
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      // Handle successful upload (e.g., display a confirmation message)
      console.log('File uploaded successfully!');
      setUploadStatus('success');
    } catch (error) {
      console.error("error has occured",error);
      setErrorMessage('An error occurred during upload. Please try again.');
      setUploadStatus('failed');
    } finally {
      // Reset upload status after completion (success or failure)
      setTimeout(() => setUploadStatus('idle'), 2000); // Hide status after 2 seconds
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploadStatus === 'uploading'}>
        {uploadStatus === 'idle' ? 'Upload PDF' : (
          uploadStatus === 'uploading' ? 'Uploading...' : 'Retry Upload'
        )}
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {uploadStatus === 'success' && <p>File uploaded successfully!</p>}
    </div>
  );
}