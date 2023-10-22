import "./post.css"
import blue from "../../assets/images/blue.jpg"
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src={blue}
            alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                    <Link className="link" to="/posts?cat=Tech">
                        Tech
                    </Link>
                    </span>
                    <span className="postCat">
                    <Link className="link" to="/posts?cat=Travel">
                        Travel
                    </Link>
                    </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a ea voluptates odit, 
                perferendis rem fugiat alias soluta labore eligendi blanditiis debitis odio maiores cupiditate perspiciatis vero explicabo sequi quod repudiandae officiis? 
                Nam molestiae amet quis aut sit nobis unde id hic inventore ipsa vel quisquam rerum, libero a earum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a ea voluptates odit, 
                perferendis rem fugiat alias soluta labore eligendi blanditiis debitis odio maiores cupiditate perspiciatis vero explicabo sequi quod repudiandae officiis? 
                Nam molestiae amet quis aut sit nobis unde id hic inventore ipsa vel quisquam rerum, libero a earum.
                
            </p>
            {/* <singlePost /> */}
        </div>
    );
    }