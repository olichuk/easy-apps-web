import React from "react";
import "./styles.css";

interface IProps {
  text: string;
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean;
}

const CustomButton = ({ onClick, type, text, disabled }: IProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="button">
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
