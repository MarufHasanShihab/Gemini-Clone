import { createContext, useState } from "react";
import run from "../config/Gemini";
import PropTypes from "prop-types";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [resentPrompt, setRecentPrompt] = useState("");
  const [prevtPrompt, setPrevtPrompt] = useState([]);
  const [showResult, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev=> prev+nextWord);
    }, 75*index);
  }

  const newChat = ()=>{
    setLoading(false);
    setResult(false)
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setResult(true);
    setRecentPrompt(input);
    let response;
    if(prompt !== undefined){
      response = await run(prompt)
      setRecentPrompt(prompt)
    }else{
      setPrevtPrompt(prev => [...prev,input])
      setRecentPrompt(input)
      response = await run(input)
    }
    const responseArray = response.split("**");
    let newResponse ="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br/>");
    const newResponseArray = newResponse2.split(" ");
    for(let i = 0; i < newResponseArray.length; i++){
      const newtWord = newResponseArray[i]
      delayPara(i, newtWord+" ")
    }
    setLoading(false);
    setInput("");
  }
  const contextValue = {
    prevtPrompt,
    setPrevtPrompt,
    onSent,
    setRecentPrompt,
    resentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
