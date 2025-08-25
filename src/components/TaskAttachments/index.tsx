import React from "react";
import AddAttachmentButton from "./AddAttachmentsButton";

import "./styles.css";
import TasksAttachmentsItem from "./TaskAttachmentsItem";

interface IProps {
  attachments: File[];
  addAttachment: (attachment: File) => void;
  removeAttachment: (attachmentToDelete: File) => void;
}

const TaskAttachments = ({
  attachments,
  addAttachment,
  removeAttachment,
}: IProps) => {
  return (
    <div className="attachments-container">
      <div className="attachments-horizontal-container">
        <div className="add-attachment-fixed">
          <AddAttachmentButton addAttachment={addAttachment} />
        </div>

        <div className="attachments-list">
          {Array.isArray(attachments) && attachments.map((item, index) => (
            <div key={index} className="attachment-item-wrapper">
              <TasksAttachmentsItem
                attachment={item}
                removeAttachment={removeAttachment}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskAttachments;
