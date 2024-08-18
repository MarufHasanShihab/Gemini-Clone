import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const { onSent, prevtPrompt, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = (item)=>{
    onSent(item);
    setRecentPrompt(item)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={assets.menu_icon}
          alt="menu_icon"
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="pluc_icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevtPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
        )}
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
