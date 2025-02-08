import '../styles/Common.css'
import UserTable from '../components/UserTable'
import Button from '../components/Button'
import { useState } from 'react'
import { User } from '../../models/User'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import NoDataText from '../components/NoDataText'


const Home: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    return (
        <>
            <div>
                <FaDownload className='fa-icon' />
                <Button text='Download' />
                { 
                  users.length > 0 ? 
                  <UserTable users={users} /> : 
                  <NoDataText button='Download' source='External API' />
                }
                
            </div>
        </>
    );
}

export default Home
