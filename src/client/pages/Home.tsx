import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { User } from '../../models/User';
import Button from '../components/Button';
import Message from '../components/Message';
import React from 'react';
import UserTable from '../components/UserTable';
import '../styles/Common.css';


const Home: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [message, setMessage] = useState("Click 'Download' to Display Users from an External API.");

    useEffect(() => {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        }
    }, []);

    // Fetch users from the API
    const handleDownload = async () => {

        setMessage("Downloading...");

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok)
                throw new Error("Failed to fetch users");

            const data = await response.json();
            setUsers(data); // Update state with API response
            localStorage.setItem('users', JSON.stringify(data)); // Persist locally
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div>
            <FaDownload className='fa-icon' />
            <Button text='Download' action={handleDownload} />
            {
                users.length > 0 ? 
                    <div className="table-container">
                        <UserTable users={users} /> 
                    </div> :
                    <Message message={message} />
            }
            
        </div>
    );
}


export default Home

