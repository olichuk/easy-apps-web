import React from "react";
import "./styles.css";

interface IProps {
  text: string;
  onClick?: () => void;
  type?: "submit";
}

const CustomButton = ({ onClick, type, text }: IProps) => {
  return (
    <button type={type} onClick={onClick} className="button">
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
