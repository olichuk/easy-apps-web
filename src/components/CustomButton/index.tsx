import React from "react";
import './styles.css';

interface IProps {
    children: string;
    onClick: () => void;
}

const CustomButton = ({ children, onClick }: IProps) => {
    return (
        <button onClick={onClick} className="button">{children}</button>
    );
};

export default CustomButton;