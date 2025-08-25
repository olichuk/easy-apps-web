import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import validationSchemaAddTasks from "../../validation/validationSchemaAddTask";

import useTasks from "../../hooks/useTasks";
import TaskAttachments from "../../components/TaskAttachments/index";
import CustomInput from "../CustomInput/index";
import CustomButton from "../CustomButton/index";
import TextError from "../../components/TextError/index";




const EditTaskPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentTask, getTaskById, updateTask, deleteTask, loading } = useTasks();

  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (id) {
      getTaskById(id);
    }
  }, [id]);

  useEffect(() => {
    if (currentTask?.files) {
      setFiles(currentTask.files);
    }
  }, [currentTask]);

  const addFile = (file: File) => {
    setFiles((prev) => [...prev, file]);
  };

  const removeFile = (fileToRemove: File) => {
    setFiles((prev) => prev.filter((f) => f !== fileToRemove));
  };

  const handleSubmit = (values: { title: string; description: string }) => {
    if (!id) return;
    updateTask(id, values.title, values.description, files, () => {
      navigate("/tasks");
    });
  };


  const handleDeleteClick = () => {
    if (!id) return;
    deleteTask(id);
    navigate("/tasks");
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: currentTask?.title || "",
        description: currentTask?.description || "",
      }}
      validationSchema={validationSchemaAddTasks}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, setFieldValue, errors, values, isSubmitting }) => (
        <div className="add-task-form-container">
          <div className="add-task-form-inputs">
            <CustomInput
              type="text"
              label="Task title"
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
            />
            {errors.title && <TextError error={errors.title} />}

            <CustomInput
              type="text"
              label="Task description"
              value={values.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
            />
            {errors.description && <TextError error={errors.description} />}

            <TaskAttachments
              attachments={files}
              addAttachment={addFile}
              removeAttachment={removeFile}
            />
          </div>

          <div className="add-task-form-button">
            <CustomButton
              type="submit"
              text={isSubmitting || loading ? "Saving..." : "Save"}
              onClick={() => handleSubmit()}
            />
          </div>

          <div className="delete-task-form-button">
            <CustomButton
              type="submit"
              text="Delete"
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EditTaskPage;
