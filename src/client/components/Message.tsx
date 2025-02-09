import React from "react";
import '../styles/Common.css'

const Message: React.FC<{ message: string}> = ({ message }) => {
    return (
        <p className='info-text'>
          {message}
        </p>
    );
}

export default Message