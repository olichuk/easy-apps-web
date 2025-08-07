/** @format */

import React, { useState } from "react";
import "./styles.css";
import openedEye from "../../assets/icons/opened-eye.svg";
import closedEye from "../../assets/icons/closed-eye.svg";

interface IProps {
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  isShowPassword?: boolean;
  disabled?: boolean;
}

const CustomInput = ({
  type,
  label,
  onChange,
  value,
  isShowPassword,
  disabled,
}: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const switchVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="custom-input-container">
      <span className="custom-input-label">{label}</span>
      <input
        type={type === "password" && showPassword ? "text" : type}
        className="custom-input"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {type === "password" && isShowPassword && (
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
