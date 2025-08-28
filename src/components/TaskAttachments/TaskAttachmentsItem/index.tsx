import React from "react";
import DeleteIcon from "../../../assets/icons/trash-can-icon.svg";
import "./styles.css";

interface IProps {
  attachment: File | string;
  removeAttachment: (attachmentToDelete: File) => void;
}

const TasksAttachmentsItem = ({ attachment, removeAttachment }: IProps) => {
  const previewUrl =
    attachment instanceof File ? URL.createObjectURL(attachment) : attachment;

  return (
    <div className="attachment-container">
      <img className="attachment-image" src={previewUrl} alt="Attachment" />
      <div className="delete-icon-container">
        <img
          src={DeleteIcon}
          alt="Delete"
          onClick={() => removeAttachment(attachment as File)}
        />
      </div>
    </div>
  );
};

export default TasksAttachmentsItem;
