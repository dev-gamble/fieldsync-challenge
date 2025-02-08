import React from "react";

const Logo: React.FC<{ logo: string }> = ({ logo }) => {
    return (
        <div>
            <img src={logo} alt='Field Sync' width="150" height="50" />
        </div>
    );
};

export default Logo;
