/** @format */

import React, { useMemo, useRef } from "react";
import editIcon from "../../assets/icons/edit-pencil-icon.svg";
import deleteIcon from "../../assets/icons/trash-can-icon.svg";
import emptyPhotoImage from "../../assets/images/empty-photo-image.svg";
import "./styles.css";

interface IProps {
  values: any;
  setFieldValue?: (field: string, value: any) => void;
}

const ImagePicker = ({ values, setFieldValue }: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageUrl = useMemo(() => {
    return values?.avatar ?
        URL.createObjectURL(values.avatar)
      : emptyPhotoImage;
  }, [values?.avatar]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.[0]) {
      setFieldValue?.("avatar", files[0]);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = () => {
    setFieldValue?.("avatar", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="avatar-input-container">
      <input
        className="avatar-input"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <img src={imageUrl} alt="Avatar" className="avatar-preview" />
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
