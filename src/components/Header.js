import React from 'react'
import "../css/main.css"
import { BsFillXCircleFill } from "react-icons/bs";




let monty = require("./MONTYLOGO.png")


export default function Header(props) {
 const handleexit =() =>{
    props.ontoggle(true)

  }
  
  return (

    <div className="header">

        <div className="circle">
            <img src={monty} className="montyimg"/>
        </div>
        <span className="chattitle">MontyMobile</span>
        <BsFillXCircleFill size={30} className="exit" onClick={handleexit}/>
    </div>
  )
}
