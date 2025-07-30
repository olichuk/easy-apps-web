/** @format */

import React, { useMemo, useRef, useState } from "react";
import editIcon from "../../assets/icons/edit-pencil-icon.svg";
import deleteIcon from "../../assets/icons/trash-can-icon.svg";
import emptyPhotoImage from "../../assets/images/empty-photo-image.svg";
import "./styles.css";

const ImagePicker = () => {
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageUrl = useMemo(() => {
    return image ? URL.createObjectURL(image) : emptyPhotoImage;
  }, [image]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.[0]) {
      setImage(files[0]);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="avatar-input-container">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <img src={imageUrl} alt="Avatar" />
      <div className="picker-edit-icon-container">
        <img
          className="picker-edit-icon"
          src={editIcon}
          alt="Edit"
          onClick={handleEditClick}
        />
      </div>
      <div className="picker-delete-icon-container">
        <img
          className="picker-delete-icon"
          src={deleteIcon}
          alt="Delete"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default ImagePicker;
