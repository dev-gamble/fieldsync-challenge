import '../styles/Common.css'
import UserTable from '../components/UserTable';
import Button from '../components/Button';
import { useState } from 'react';
import { User } from '../../models/User';
import { FaSync } from 'react-icons/fa';
import NoDataText from '../components/NoDataText';

const Fetch = () => {
    const [users, setUsers] = useState<User[]>([])
    return (
        <>
            <div>
                <FaSync className='fa-icon' />
                <Button text='Fetch' />
                { 
                  users.length > 0 ? 
                  <UserTable users={users} /> : 
                  <NoDataText button='Fetch' source='Database' />
                }
            </div>
        </>
    );
}

const handleFetch = () => {

}

export default Fetch