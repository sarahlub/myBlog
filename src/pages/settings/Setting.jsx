import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
import cute from "../../assets/images/cute.avif"

export default function Setting() {
return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Picture</label>
                <div className="settingsPP">
                    <img 
                    src={cute}
                    alt="" 
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user fa-beat-fade"></i>
                    </label>
                    <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:"none"}} 
                    className="settingsPPInput"
                    />
                </div>
                <label>username</label>
                <input type="text"  name="name"/>
                <label>Email</label> 
                <input type="email"  name="email" />
                <label>Password</label>
                <input type="password"  name="password" />
                <button className="settingsSubmit" type="submit">
                    Update
                    </button>
                </form>
        </div>
        <Sidebar />
        </div>
)
}