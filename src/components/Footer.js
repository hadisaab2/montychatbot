import React, { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { StepsContext } from "../Context/StepsContext";
import UserMessage from "./UserMessage";

function Footer(props) {
  const { items, lasttrigger, disableinput, name } = useContext(StepsContext);
  //components items for chatbot
  const [components, setcomponents] = items;
  //check the last trigger before returning from recursive function loopsteps
  const [trigger, settrigger] = lasttrigger;
  const [inputvalue, setinputvalue] = useState("");
  const [input, setinput] = disableinput;
  const [inputname, setinputname] = name;
  const [placeholder, setplaceholder] = useState("Enter a Message");
  const [changeinput, setchangeinput] = useState(true);

  const handleinput = (e) => {
    setinputvalue(e.target.value);
  };

  const handleuserclick = async () => {
    console.log(props.validationstep);
    if (inputvalue != "") {
      //if validation is true we should check if input value is number or not 
      if (props.validationstep == true) {
        const num = Number(inputvalue);
        if (!Number.isInteger(num)) {
           //if not a number
          setchangeinput(false);//change input className to show red border
          setplaceholder("Enter a valid phonenumber ");//change placeholder
          setinputvalue("");
          await new Promise((r) => setTimeout(r, 1200));//wait then return to original classname
          setchangeinput(true);
          setplaceholder("Enter a message");
        } else {
          //if not number normally add the usermessage to components array
          setcomponents((oldArray) => [
            ...oldArray,
            <UserMessage message={inputvalue} />,
          ]);
          props.loopsteps(trigger);
          setinputvalue("");
          setinput(true);
        }
      } else {
          //if no validation normally add usermessage
        setcomponents((oldArray) => [
          ...oldArray,
          <UserMessage message={inputvalue} />,
        ]);
        props.loopsteps(trigger);
        setinputvalue("");
        setinput(true);
        if (components.length < 4) {
          //if components length is still less than 4 than this is the name input for the user so we save value in context api
          setinputname(inputvalue);
        }
      }
    }
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleuserclick();
    }
  };
  if (!input) {
    return (
      <div className="footer">
        <input
          className={changeinput ? "input" : "validation"}
          placeholder={placeholder}
          value={inputvalue}
          onChange={handleinput}
          onKeyPress={handleKeypress}
        />
        <div className="sendbutton" onClick={handleuserclick}>
          <IoMdSend className="sendicon" size={23} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <input
          className={changeinput ? "input" : "validation"}
          placeholder="Enter a Message"
          value={inputvalue}
          disabled
        />
        <div className="sendbutton">
          <IoMdSend className="sendicon" size={23} />
        </div>
      </div>
    );
  }
}

export default Footer;
