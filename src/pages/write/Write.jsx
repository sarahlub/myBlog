import "./write.css"
import swan from "../../assets/images/swan.jpg"

export default function Write() {
return (
    <div className="write">
        <img 
        className="writeImg"
        src={swan}
        alt="" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-user-plus fa-beat-fade"></i>
                </label>
                <input type="file"  id="fileInput" style={{display:"none"}} />
                <input 
                type="text" 
                placeholder="Title" 
                className="writeInput" 
                autoFocus={true}
                />
            </div>
            <div className="writeFormGroup">
                <textarea 
                placeholder="Story time..." 
                type="text" 
                className="writeInput writeText" 
                autoFocus={true}
                />
            </div>
            <button className="writeSubmit">
                Publish
                </button>
        </form>
        </div>
)
}