import React from "react";

const Button = ({ className, icon, imgStyle, alt, onClick, label = "Button", type = "button", id, iconPosition = "right", }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center space-x-2 ${className}`}
            id={id}
        >
            {icon && iconPosition === "left" && (
                <img className={imgStyle} src={icon} alt={alt} />
            )}
            <span>{label}</span>
            {icon && iconPosition === "right" && (
                <img className={imgStyle} src={icon} alt={alt} />
            )}
        </button>
    );
};

export default Button;
