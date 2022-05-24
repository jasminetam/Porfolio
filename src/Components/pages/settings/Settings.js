import Sidebar from "../../Sidebar/Sidebar"
import "./settings.css"
import { RiUser3Fill } from 'react-icons/ri';


export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <Sidebar />
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="" alt="" />
                        <label htmlFor="fileInput">
                            <RiUser3Fill className="topSearchIcon" />
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Harry" />
                    <label>Email</label>
                    <input type="email" placeholder="harry@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
        </div>
    );
}