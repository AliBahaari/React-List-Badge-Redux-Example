import '../styles/Mail.css';
import { useRef } from 'react';
import { decrementBadge } from '../redux/slices/NavbarSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const clicked = {}
const random = uuidv4();

function Mail() {

    const mailRef = useRef();
    const dispatch = useDispatch();

    const clickMail = () => {

        mailRef.current.style.backgroundColor = '#00A9A5';
        console.log(mailRef.current.dataset.random);

        dispatch(decrementBadge());

    }

    return (
        <div className="mail" onClick={clickMail} data-random={random} ref={mailRef}>
            <p>Click on Me and Then See the Badge!</p>
        </div>
    )
}

export default Mail
