import React from "react";
import './InputField.css'; // Ensure the CSS file is properly imported

const InputField = ({ label, type, value, onChange, placeholder }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
