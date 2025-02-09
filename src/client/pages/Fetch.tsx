import { useState } from 'react';
import { FaSync } from 'react-icons/fa';
import { User } from '../../models/User';
import Button from '../components/Button';
import Message from '../components/Message';
import UserTable from '../components/UserTable';
import '../styles/Common.css';

const Fetch = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [message, setMessage] = useState("Click 'Fetch' to Display Users from the Database.");

    const handleFetch = async () => {

        try {
            const response = await fetch("http://localhost:3001/users");

            if (!response.ok) 
                throw new Error("Failed to fetch users");

            const data = await response.json();
            if (!data || data.length === 0) {
                setMessage('No users to fetch! Did you save?');
                return;
            }
            setUsers(data);

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div>
            <FaSync className='fa-icon' />
            <Button text='Fetch' action={handleFetch} />
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

export default Fetch