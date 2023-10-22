import "./topbar.css"
import pet from "../../assets/images/pet.jpg"
import { Link } from "react-router-dom";


export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook fa-beat"></i>
            <i className="topIcon fa-brands fa-square-x-twitter fa-beat"></i>
            <i className="topIcon fa-brands fa-square-instagram fa-beat"></i>
            <i className="topIcon fa-brands fa-square-whatsapp fa-beat"></i>
            <i className="topIcon fa-solid fa-phone fa-beat"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                            </Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                            </Link>
                            </li>
                        {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? ( 
                    <Link className="link" to="/setting">
                            <img 
                                className="topImg"
                                src={pet}
                                alt="" 
                                />
                    </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">
                            LOGIN
                            </Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/register">
                            REGISTER
                            </Link>
                            </li>
                            </ul>
                    )}
                <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass fa-beat-fade"></i>
            </div>
        </div>
    );
    }