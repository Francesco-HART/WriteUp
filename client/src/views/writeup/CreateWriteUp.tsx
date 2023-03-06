import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const saveFile = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e: any) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      console.log("iciiiiiiiiiiiiiiiiiiii");

      const res = await axios.post(
        "http://localhost:5000/api/writeups",
        formData
      );
      console.log(res.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;
