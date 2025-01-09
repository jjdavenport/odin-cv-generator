import { useState, useRef } from "react";

const useDrop = ({ setPersonal }) => {
  const [dragging, setDragging] = useState(false);

  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    let file;
    if (e.dataTransfer) {
      file = e.dataTransfer.files[0];
    } else if (e.target.files) {
      file = e.target.files[0];
    }
    setPersonal((prev) => ({
      ...prev,
      avatar: URL.createObjectURL(file),
    }));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  return {
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleUpload,
    fileInputRef,
    dragging,
  };
};

export default useDrop;
