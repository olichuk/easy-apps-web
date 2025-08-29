import React, { useRef } from "react";
import "./styles.css";

interface IProps {
  addAttachment: (attachment: File) => void;
}

const AddAttachmentButton = ({ addAttachment }: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePickPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      filesArray.forEach(file => addAttachment(file));
    }
  };

  return (
    <div>
      <button className="add-attachment-button" onClick={handlePickPhoto}>
        Add
        <br />
        photo +
      </button>
      <input
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AddAttachmentButton;
