import React, {useState} from "react";
import{AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import './accord.css'


function SingleQuestion (props){
    const [showInfo,setShowInfo] = useState(false);

    const handleClick =()=>
        {
            setShowInfo(!showInfo)
        }
    return(
        <article className="question">
            <header><h4>{props.title}</h4>
            <button className="btn" onClick={()=>handleClick()}>{showInfo? <AiOutlinePlus/>:<AiOutlineMinus/>}</button>
            </header>
            {showInfo && <p>props.info</p>}

        </article>
    )
}
export default SingleQuestion