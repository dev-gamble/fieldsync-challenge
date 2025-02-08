import React from "react";

const Button: React.FC<{ text: string }> = ({ text }) => {
    return (
        <>
            <div>
                <button>{text}</button>
            </div>
        </>
    );
}

export default Button