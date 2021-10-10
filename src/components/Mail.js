import '../styles/Mail.css';
import { useRef } from 'react';
import { decrementBadge } from '../redux/slices/NavbarSlice';
import { useDispatch } from 'react-redux';

function Mail() {

    const mailRef = useRef();
    const dispatch = useDispatch();

    const clickMail = () => {

        mailRef.current.style.backgroundColor = '#00A9A5';

        dispatch(decrementBadge());

    }

    return (
        <div className="mail" onClick={clickMail} ref={mailRef}>
            <p>Click on Me and Then See the Badge!</p>
        </div>
    )
}

export default Mail
