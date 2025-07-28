import React from "react";
import "./styles.css";

interface IProps {
  error: string;
}

const TextError = ({ error }: IProps) => {
  return (
    <div className="text-error">
      <span className="text-error__message">{error}</span>
    </div>
  );
};
export default TextError;
