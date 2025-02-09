import React from "react";

const Button: React.FC<{ text: string, action: () => void }> = ({ text, action }) => {
    return (
        <>
            <div>
                <button onClick={action}>{text}</button>
            </div>
        </>
    );
}

export default Button