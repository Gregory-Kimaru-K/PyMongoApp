import React, { useState } from 'react'

function Add() {
    const [files, setFiles] = useState([])
    const [previews, setPreviews] = useState([])

    const handleChange = (event) => {
        const selectedFiles = Array.from(event.target.files)

        if (selectedFiles.length > 0){
            setFiles(selectedFiles)
            const URLpreviews = selectedFiles.map((file) => URL.createObjectURL(file));

            setPreviews(URLpreviews)
        }
    };

    const handleUpload = async () => {
        if (files === 0) {
          alert('Please select a file first.');
          return;
        }
    }
    return (
        <div>
            <h1>Upload img</h1><br /><br />
            <input type="file" accept="image/*" multiple onChange={handleChange} /><br /><br />
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                {previews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Preview ${index}`} style={{width: '300px'}} />
                ))}
            </div><br /><br />
            <button onClick={handleUpload}>Submit</button>
        </div>
    )
}

export default Add
