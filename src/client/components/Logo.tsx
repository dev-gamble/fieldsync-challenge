import React from "react";
import '../styles/Common.css'

const Logo: React.FC<{ logo: string }> = ({ logo }) => {
    return (
        <div className='logo-container'>
            <img src={logo} alt='Field Sync' width="150" height="50" />
        </div>
    );
};

export default Logo;
