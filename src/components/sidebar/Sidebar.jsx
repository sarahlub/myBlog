import { Link } from "react-router-dom";
import "./sidebar.css"
import puppy from "../../assets/images/puppy.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src={puppy} 
                alt="" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente cupiditate odio modi saepe provident, velit laudantium possimus numquam hic impedit inventore. Repellendus, et molestiae maxime nisi quam harum eaque maiores!
                    </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Travel">
                            Travel
                        </Link>
                        </li>
                    <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook fa-beat"></i>
            <i className="sidebarIcon fa-brands fa-square-x-twitter fa-beat"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram fa-beat"></i>
            <i className="sidebarIcon fa-brands fa-square-whatsapp fa-beat"></i>
            <i className="sidebarIcon fa-solid fa-phone fa-beat"></i>
            </div>
            </div>
        </div>
    );
    }
    




