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
        <body className="body_main"> <main className="Acord_main" >

        <div className="container_box ">

            <div className="login_text "><h3>Qestions And Answers About Login </h3> </div>

           <article className="question_List">
               <h5>{props.title} </h5>  <button  className="symbol" onClick={()=>handleClick()}> {showInfo? <AiOutlinePlus/>:<AiOutlineMinus/>} </button> 
               {showInfo && <p>{props.info}</p>}
             </article>

        </div>
        </main>

        </body>
    )
}
export default SingleQuestion