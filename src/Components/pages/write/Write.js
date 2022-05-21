import "./write.css"
import { RiAddCircleLine } from 'react-icons/ri';

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <RiAddCircleLine className="writeIcon" />
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <texttarea placeholder="Tell your story..." 
                    type="text" 
                    className="writeInput writeText">
                    </texttarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}