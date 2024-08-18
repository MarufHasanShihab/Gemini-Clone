/* eslint-disable react/no-danger-with-children */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    resentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      {/* nav */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      {/* main container */}
      <div className="main-container">
        {!showResult ? (
          <div>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
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
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{resentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="gemini_icon" />
                {
                    loading ? <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
            </div>
          </div>
        )}

        {/* main bottom */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              { input &&
                <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="send_icon"
              />
              }
            </div>
          </div>
          {/* bottom info */}
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
