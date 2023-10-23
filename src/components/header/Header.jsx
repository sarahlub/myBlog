import "./header.css"
import spring from "../../assets/images/spring.png"


export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
            <span className="headerTitleSm">Tech</span>
            <span className="headerTitleLg">Blog</span>
        </div>
            <img className="headerImg" 
            src={spring}
            alt="" />
            </div>
    )
}