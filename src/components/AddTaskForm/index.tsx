import { Formik } from "formik";
import React from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import TaskAttachments from "../../components/TaskAttachments";
import TextError from "../../components/TextError/index";
import useTasks from "../../hooks/useTasks";
import validationSchemaAddTasks from "../../validation/validationSchemaAddTask";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const AddTaskForm = () => {
  const navigate = useNavigate();
  const [attachments, setAttachments] = React.useState<File[]>([]);
  const { createTask } = useTasks();

  const addAttachment = React.useCallback(
    (newAttachment: File) => {
      setAttachments([...attachments, newAttachment]);
    },
    [attachments]
  );

  const removeAttachment = React.useCallback(
    (attachmentToDelete: File) => {
      setAttachments(
        attachments.filter((attachment) => attachment !== attachmentToDelete)
      );
    },
    [attachments]
  );
  const handleSubmit = async (values: {
    title: string;
    description: string;
  }) => {
    try {
      await createTask(values.title, values.description, attachments);
      navigate("/tasks");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={validationSchemaAddTasks}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, setFieldValue, errors, isSubmitting }) => (
        <div className="add-task-form-container">
          <div className="add-task-form-inputs">
            <CustomInput
              type="Text"
              label="Task title"
              onChange={(e) => setFieldValue("title", e.target.value)}
            />
            {errors.title && <TextError error={errors.title} />}
            <CustomInput
              type="Text"
              label="Task description"
              onChange={(e) => setFieldValue("description", e.target.value)}
            />
            {errors.description && <TextError error={errors.description} />}
            <TaskAttachments
              attachments={attachments}
              addAttachment={addAttachment}
              removeAttachment={removeAttachment}
            />
          </div>
          <div className="add-task-form-button">
            <CustomButton
              type="submit"
              text={isSubmitting ? "Saving..." : "Save"}
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};
export default AddTaskForm;
