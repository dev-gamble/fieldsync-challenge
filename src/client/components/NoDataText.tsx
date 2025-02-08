import React from "react";
import '../styles/Common.css'

const NoDataText: React.FC<{ button: string, source: string}> = ({ button, source }) => {
    return (
        <p className='info-text'>
          Click {button} to Get Users from {source}.
        </p>
    );
}

export default NoDataText