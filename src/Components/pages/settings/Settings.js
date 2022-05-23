import Sidebar from "../../Sidebar/Sidebar"
import "./settings.css"


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
                        <label htmlFor="fileInput"></label>
                    </div>
                </form>
            </div>
        </div>
    );
}