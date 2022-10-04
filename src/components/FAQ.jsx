import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';


const FAQ = ({question, answer}) => {
    
const [isAnswerShown, setIsAnswerShown] = useState(false);

    return (
        <article className='faq' onClick={() => {setIsAnswerShown((prev) => (!prev))}}>
            <div >
                <h4>
                    {question}
                </h4>
                <button className="faq__icon">
                    {isAnswerShown ? <AiOutlineMinus/>  :  <AiOutlinePlus /> }
                </button>
            </div>
            <p>
                {isAnswerShown && <p>{answer}</p>}
            </p>
        </article>
    )
}

export default FAQ