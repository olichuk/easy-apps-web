import React, { useState } from "react";
import "./styles.css";
import openedEye from "../../assets/icons/opened-eye.svg";
import closedEye from "../../assets/icons/closed-eye.svg";

interface IProps {
  //type: React.HTMLInputTypeAttribute;
  typeInput?: "password";
  label: string;
  //value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ typeInput, label, onChange }: IProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const switchVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="custom-input-container">
      <span className="custom-input-label">{label}</span>
      <input
        type={showPassword ? "text" : "password"}
        className="custom-input"
        onChange={onChange}
      />
      {typeInput === "password" && (
        <div className="custom-input-icon-container">
          <img
            className="custom-input-icon"
            src={showPassword ? openedEye : closedEye}
            alt="eye"
            onClick={switchVisibility}
          />
        </div>
      )}
    </div>
  );
};

export default CustomInput;
