import React from "react";
import './styles.css';

interface IProps {
    type: string;
    placeholder: string;
    value: string;
}

const CustomInput = ({ type, placeholder, value }: IProps) => {
    return (
        <div>
            <p className="placeholder">{placeholder}</p>
            <input type={type} value={value} className="input" />
        </div>
    );
}

export default CustomInput;