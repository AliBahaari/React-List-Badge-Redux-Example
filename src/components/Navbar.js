import '../styles/Navbar.css';
import { useSelector } from 'react-redux';

function Navbar() {

    const navbarReducer = useSelector(state => state.NavbarSlice);
    
    return (
        <div className="navbar">
            <ul>
                <li><span>Home</span></li>
                <li>
                    <span>Mails</span>
                    <div></div>
                    <span className="badge">{ navbarReducer.dummy }</span>
                </li>
                <li><span>Settings</span></li>
            </ul>
        </div>
    )
}

export default Navbar;
