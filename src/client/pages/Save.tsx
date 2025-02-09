import React, { useState, useEffect } from 'react';
import { FaSave, FaEraser } from 'react-icons/fa';
import { User } from '../../models/User';
import Button from '../components/Button';
import Message from '../components/Message';
import '../styles/Common.css';

const Save: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [message, setMessage] = useState("Click 'Save' to Store Users or 'Reset' to Clear the Database.");

    useEffect(() => {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        } else {
            setMessage("No users to save! Please Download them from the Home page first.");
        }
    }, []);

    const handleSave = async () => {

        if (users.length === 0) {
            setMessage("No users to save!");
            return;
        }
    
        try {
          const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
          });
    
          if (!response.ok) 
            throw new Error("Failed to save users");
    
          setMessage("Users saved successfully!");

        } catch (error) {
            console.error("Error saving users:", error);
            setMessage("Error saving users. You may be attempting to save duplicate records. Please reset the database and try again.");
        }
    };

    const handleReset = async () => {

        try {
            const response = await fetch("http://localhost:3001/users", {
                method: "DELETE"
            });

            if (!response.ok)  {
                setMessage("Failed to clear database.");
                return;
            }

            localStorage.removeItem('users');
            setUsers([]);
            setMessage("Database and local cache cleared!");

        } catch (error) {
            console.error("Error resetting users:", error);
        }
    };

    return (
        <>
            <div>
                <div className='button-container'>
                    <div className='icon-button'>
                        <FaSave className='fa-icon' />
                        <Button text='Save' action={handleSave} />
                    </div>
                    <div className='icon-button'>
                        <FaEraser className='fa-icon' />
                        <Button text='Reset' action={handleReset} />
                    </div>
                </div>
                <div className='message-container'>
                    <Message message={message} />
                </div>
            </div>
        </>
    );
}

export default Save
