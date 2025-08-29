import React from "react";
import { Formik } from "formik";
import validationSchemaAddTasks from "../../validation/validationSchemaAddTask";
// import TaskAttachments from "../../components/TaskAttachments/index";
import CustomInput from "../CustomInput/index";
import CustomButton from "../CustomButton/index";
import TextError from "../../components/TextError/index";
import useEditTask from "../../hooks/useEditTask";
import "./styles.css";
import TaskAttachments from "../TaskAttachments";

const EditTaskPage = () => {
  const {
    currentTask,
    loading,
    // files,
    handleSubmit,
    addFile,
    removeFile,
    handleDeleteClick,
  } = useEditTask();

  return (
    <Formik
      enableReinitialize
      initialValues={{
        _id: currentTask?._id || "",
        title: currentTask?.title || "",
        description: currentTask?.description || "",
        done: currentTask?.done || false,
        files: [],
        oldFiles:
          currentTask && Array.isArray(currentTask.files)
            ? (currentTask.files.filter(
                (f) => typeof f === "string"
              ) as string[])
            : [],
      }}
      validationSchema={validationSchemaAddTasks}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, setFieldValue, errors, values, isSubmitting }) => (
        <div className="edit-task-form-container">
          <div className="edit-task-form-inputs">
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

            <label className="status-checkbox-label">
              Done:
              <input
                type="checkbox"
                checked={values.done}
                onChange={(e) => setFieldValue("done", e.target.checked)}
              />
            </label>
          </div>
          <div className="attachments">
            <TaskAttachments
              attachments={
                currentTask && Array.isArray(currentTask.files)
                  ? (currentTask.files.filter(
                      (f) => typeof f === "string"
                    ) as string[])
                  : []
              }
              removeAttachment={removeFile}
              addAttachment={addFile}
            />
          </div>
          <div className="save-task-form-button">
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
