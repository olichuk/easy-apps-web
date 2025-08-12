import React from "react";
import "./styles.css";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import ImagePicker from "../ImagePicker";
import { Formik } from "formik";
import { useProfile } from "../../hooks/useProfile";
import { useDispatch } from "react-redux";
import { updateProfileThunk } from "../../store/asyncActions/updateProfileThunk";
import { deleteAvatarThunk } from "../../store/asyncActions/deleteAvatarThunk";
import { TAppDispatch } from "../../store";
import { logoutThunk } from "../../store/asyncActions/logoutThunk";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileForm = () => {
  const { data, loading } = useProfile();
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutClick = () => {
    if (!window.confirm("Are you sure you want to log out?")) return;
      setIsLoggingOut(true);
      dispatch(logoutThunk())
        .unwrap()
        .then(() => navigate("/login", { replace: true }))
        .catch(() => alert("Failed to logout, please try again"))
        .finally(() => setIsLoggingOut(false));
  };

  if (loading || !data) return <div>Loading...</div>;

  return (
    <Formik
      initialValues={{
        email: data.email,
        name: data.name,
        avatar: null as File | null,
        avatarPreview: data.avatar || "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const formData = new FormData();
          formData.append("username", values.name);

          if (values.avatar) {
            formData.append("avatar", values.avatar);
          }

          if (!values.avatarPreview && data.avatar) {
            await dispatch(deleteAvatarThunk());
          }

          if (values.name !== data.name || values.avatar) {
            await dispatch(updateProfileThunk(formData));
            alert("Profile updated successfully");
          }
        } catch {
          alert("Failed to update profile");
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ handleChange, handleSubmit, setFieldValue, values }) => {
        const isDirty =
          values.name !== data.name ||
          values.avatar !== null ||
          (values.avatarPreview === "" && data.avatar);
        
        return (
          <div className="profile-form-container">
            <ImagePicker values={values} setFieldValue={setFieldValue} />

            <div className="profile-form-inputs">
              <CustomInput
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                disabled
              />
              <CustomInput
                label="Name"
                value={values.name}
                onChange={handleChange("name")}
                type="text"
              />
            </div>

            <div className="profile-form-buttons">
              <CustomButton
                text="Update"
                type="submit"
                disabled={!isDirty || !values.name.trim()}
                onClick={() => handleSubmit()}
              />
              <CustomButton text={isLoggingOut ? "Logging out..." : "Logout"} onClick={handleLogoutClick} disabled={isLoggingOut} />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;
