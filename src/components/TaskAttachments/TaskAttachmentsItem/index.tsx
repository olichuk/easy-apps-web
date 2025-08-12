import React from "react";
import DeleteIcon from "../../../assets/icons/trash-can-icon.svg";
import "./styles.css";

interface IProps {
  attachment: File;
  removeAttachment: (attachmentToDelete: File) => void;
}

const TasksAttachmentsItem = ({ attachment, removeAttachment }: IProps) => {
  const previewUrl = URL.createObjectURL(attachment);

  return (
    <div className="attachment-container">
      <img className="attachment-image" src={previewUrl} alt="Attachment" />
      <div className="delete-icon-container">
        <img
          src={DeleteIcon}
          alt="Delete"
          onClick={() => removeAttachment(attachment)}
        />
      </div>
    </div>
  );
};

export default TasksAttachmentsItem;
