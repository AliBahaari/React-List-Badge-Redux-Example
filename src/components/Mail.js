import '../styles/Mail.css';
import { useRef, useState } from 'react';
import { decrementBadge } from '../redux/slices/NavbarSlice';
import { useDispatch } from 'react-redux';

function Mail() {

    const mailRef = useRef();
    const dispatch = useDispatch();
    const [clickedTimes, setclickedTimes] = useState(0);

    const clickMail = () => {

        if (clickedTimes == 0) {

            setclickedTimes(1);

            mailRef.current.style.backgroundColor = '#00A9A5';

            dispatch(decrementBadge());  

        }
    }

    return (
        <div className="mail" onClick={clickMail} ref={mailRef}>
            <p>Click on Me and Then See the Badge!</p>
        </div>
    )
}

export default Mail
