import { useContext, useState } from "react";
import { StepsContext } from "../Context/StepsContext";
import "../css/main.css";

export default function Categories(props) {
    /*const interests=[
        { value: "Messaging", label: "Messaging", trigger: "13" },
        { value: "Industry", label: "Industry", trigger: "14" },
        { value: "Monetization", label: "Monetization", trigger: "15" },
        { value: "Gaming", label: "Gaming", trigger: "16" },
      ]
      */
  const { interest } = useContext(StepsContext);
  const [interests, setinterests] = interest;
  const [interestclicked, setinterestclicked] = useState();
  const [divchange, setdivchange]=useState(false)

  
    const interestclick = (e) =>{
        setdivchange(true)
        setinterestclicked(e.target.outerText)
        switch(e.target.outerText) {
            case "Messaging" :
                props.loopsteps("Messaging")
                break;
            case "Gaming" :
                props.loopsteps("Gaming")
                break;
            case "Monetization":
                props.loopsteps("Monetization")
                break;

            case "Industry" :
                props.loopsteps("Industry")
                break;
        }

    setinterests(interests.filter((item) => item.value !== e.target.outerText)); 
    }
    
  if(!divchange){
  return (
    <div className="maincategoriesdiv">
      <div className="interestsouter">
        <ul className="ul">
          {interests.map((interest) => {
            return (
              <li className="li">
                <button
                  className="option"
                  onClick={interestclick}
                  // disabled={disabledbuttons}
                >
                  {interest.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
  }else {
    return(
        <div className="usermessagediv">
        <div className="usermessage">
            {interestclicked}
        </div>
      </div>
    )
}

}
