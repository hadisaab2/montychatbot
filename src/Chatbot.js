import React, { useState, useContext, useEffect,useRef } from "react";
import "./css/main.css";
import { BsFillChatLeftFill } from "react-icons/bs";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Message from "./components/Message";

import { StepsContext } from "./Context/StepsContext";
import Categories from "./components/Categories";
import Interest from "./components/Interest";
import YesNo from "./components/YesNo";
import $ from 'jquery'

export default function Chatbot() {
  const chatbotclassname =() =>{
      if(toggle){
          return "wholechatbot show"
      }else {
          if(test){
            return "wholechatbot notdisplayed"
          }else{
          return "hide"
          }
      }

  }
  const { steps, items, lasttrigger, disableinput } = useContext(StepsContext);
  const [components, setcomponents] = items;
  const [chatbotsteps, setchatbotsteps] = steps;
  const [trigger, settrigger] = lasttrigger;
  const [input, setinput] = disableinput;
  
  

  const [toggle, settoggle] = useState(false);
  const [test, settest] = useState(true);
  const [scroll, setscroll] = useState(false);
  const messagesEndRef = useRef(null)
  const [validationstep,setvalidationstep] = useState()



  const togglehandle = () => {
    var doc = document.getElementsByClassName("chatbot");
    console.log(doc);
    settest(false);
    togglefunction(toggle);
  };
  const togglefunction = (toggle) => {
    settoggle(!toggle);
  };

  const findjson = (stepid) => {
    for (let i = 0; i < chatbotsteps.length; i++) {
      if (chatbotsteps[i].id == stepid) {
        return chatbotsteps[i];
      }
    }
  };
  
  async function loopsteps(i) {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

    const object = findjson(i);
    await new Promise((r) => setTimeout(r, 1000));
    if (object.user == true) {
      settrigger(object.trigger);
      setinput(false);
      setscroll(!scroll)
      return;
    }

    if (object.customcomponent != null) {
      console.log("hi");
      switch (object.customcomponent) {
        case "categories":
          setcomponents((oldArray) => [
            ...oldArray,
            <Categories loopsteps={loopsteps} />,
          ]);
          return;
        case "interests":
          await new Promise((r) => setTimeout(r, 400));
          setcomponents((oldArray) => [
            ...oldArray,
            <Interest opt={object.options} loopsteps={loopsteps} />,
          ]);

          return;
        case "yesno":
          
          setcomponents((oldArray) => [
            ...oldArray,
            <YesNo loopsteps={loopsteps} />,
          ]);

          return;
      }
    }
    if (object.message !== null) {
      setcomponents((oldArray) => [
        ...oldArray,
        <Message message={object.message} previousvalue={object.previousvalue} />,
      ]);

    }
    setvalidationstep(object.validation)
    loopsteps(object.trigger);
  }

  return (
    <div className="chatbot">
      <div className={!toggle? "togglebutton": "togglebuttondisappear"} onClick={togglehandle} style={{transition: "all .3s",}}>
        <BsFillChatLeftFill className="toggleicon" size={23} />{" "}
      </div>
      <div 
        className={chatbotclassname()}
        disabled={false} style={{transition: "all .3s",}}
      >
        {toggle && <Header ontoggle={togglehandle} loopsteps={loopsteps} />}
        <Body loopsteps={loopsteps} />
        {toggle && <Footer loopsteps={loopsteps} validationstep={validationstep} /> }
      </div>
    </div>
  );
}
