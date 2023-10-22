import { Link } from "react-router-dom";
import "./singlePost.css";
import pup from "../../assets/images/pup.avif"
import CommentSection from "../commentSection/CommentSection";

export default function SinglePost() {
return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
                className="singlePostImg"
                src={pup}
                alt=""
        />
        <h1 className="singlePostTitle">
                Lorem ipsum dolor
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square fa-beat-fade"></i>
                <i className="singlePostIcon fa-solid fa-trash-can fa-beat-fade"></i>
                    </div>
        </h1>
        <div className="singlePostInfo">
        <span>
            Author:
            <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Sarah">
                    Sarah
                </Link>
            </b>
        </span>
            <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! 
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! 
        </p>
        <CommentSection />
        </div>
    </div>
);
}