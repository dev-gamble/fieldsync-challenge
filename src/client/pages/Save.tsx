import '../styles/Common.css'
import Button from '../components/Button';
import { FaSave } from 'react-icons/fa';

const Save = () => {
    return (
        <>
            <div>
                <FaSave className='fa-icon' />
                <Button text='Save' />
            </div>
            <p className='info-text'>
                Click Save to Put Users in Database.
            </p>
        </>
    );
}

export default Save