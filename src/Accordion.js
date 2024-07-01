import React, {useState} from "react";
import data from './data'
import SingleQuestion from './singleQuestion'
import './accord.css'

function Accordion (){

    const [questions,setQuestions] = useState(data);


    return (
        <div>

            <main>

                <div className="container">

                    <h3> Questions And Answers About Login </h3>

                    <section>
                    {questions.map((qsn) => {
  
 
    <SingleQuestion
      key={qsn.id}
      id={qsn.id}
      title={qsn.title}
      info={qsn.info}
    />
  ;
})}
                    </section>

                </div>
            </main>



        </div>
    )
}
export default Accordion