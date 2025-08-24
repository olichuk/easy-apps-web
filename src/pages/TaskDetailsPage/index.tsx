/** @format */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import ProgressStatus from "../../components/ProgressStatus/index";
import useTasks from "../../hooks/useTasks";
import "./styles.css";
import DetailsTaskAttachmentsItem from "../../components//DetailsTaskAttachments/index";
import { BarLoader } from "react-spinners";

const TaskDetailsPage = () => {
  const { currentTask, getTaskById, deleteTask, loading } = useTasks();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTaskById(id);
    }
  }, [id]);

  if (loading || !currentTask) {
    return (
      <div className="task-details-loader-container">
        <BarLoader color={"var(--violet)"} loading={true} />
      </div>
    );
  }

  let filesArray: (File | string)[] = [];

  if (currentTask?.files) {
    try {
      if (Array.isArray(currentTask.files)) {
        filesArray = currentTask.files;
      } else if (typeof currentTask.files === "string") {
        const parsed = JSON.parse(currentTask.files);
        filesArray = Array.isArray(parsed) ? parsed : [];
      } else {
        filesArray = [];
      }
    } catch (e) {
      console.error("Error parsing files:", e);
      filesArray = [];
    }
  }

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure?")) {
      deleteTask(currentTask._id);
      navigate("/tasks");
    }
  };

  return loading ? (
    <div className="task-details-loader-container">
      <BarLoader color={"var(--violet)"} loading={true} />
    </div>
  ) : (
    <div className="task-details-page-container">
      <span className="task-details-page-title">{currentTask.title}</span>
      {currentTask.description && (
        <span className="task-details-page-description">
          {currentTask.description}
        </span>
      )}

      <ProgressStatus done={currentTask?.done || false} />

      <div className="task-details-page-attachments-list">
        {filesArray.map((item, index) => {
          const src =
            item instanceof File ? URL.createObjectURL(item) : String(item);
          return <DetailsTaskAttachmentsItem key={index} item={src} />;
        })}
      </div>

      <div className="actions">
        <CustomButton text="Delete" onClick={handleDeleteClick} />
        <CustomButton
          text="Edit"
          onClick={() => navigate(`/task/edit/${currentTask._id}`)}
        />
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Full size"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default TaskDetailsPage;
