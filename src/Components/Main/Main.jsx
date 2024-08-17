import { assets } from "../../assets/assets";
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            {/* nav */}
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            {/* main container */}
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Tell me about React js and React native</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                
            {/* main bottom */}
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter your prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="gallery_icon" />
                        <img src={assets.mic_icon} alt="mic_icon" />
                        <img src={assets.send_icon} alt="send_icon" />
                    </div>
                </div>
                {/* bottom info */}
                <div className="bottom-info">
                    <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Main;