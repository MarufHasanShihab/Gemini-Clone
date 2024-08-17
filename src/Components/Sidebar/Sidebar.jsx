import "./Sidebar.css"
import {assets} from "../../assets/assets"
import { useState } from "react";

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(!extended)} className="menu" src={assets.menu_icon} alt="menu_icon" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="pluc_icon" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message_icon" />
                        <p>What is React...</p>
                    </div>
                </div> }
                
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="history_icon" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting_icon" />
                    {extended && <p>Setting</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;