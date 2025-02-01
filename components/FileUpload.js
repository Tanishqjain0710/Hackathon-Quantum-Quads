import React, { useState } from 'react';

function FileUploadPage() {
  const [files, setFiles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login state

  const handleFileUpload = (event) => {
    setFiles([...event.target.files]);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Implement actual logout functionality as needed
  };

  return (
    <div>
      <header style={styles.header}>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </header>

      <div style={styles.uploadContainer}>
        <input type="file" onChange={handleFileUpload} multiple />
        {files.length > 0 && (
          <button style={styles.submitButton}>Submit</button>
        )}
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    backgroundColor: '#f1f1f1',
  },
  logoutButton: {
    padding: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  uploadContainer: {
    paddingTop: '50px', // To prevent overlap with the header
    textAlign: 'center',
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default FileUploadPage;
