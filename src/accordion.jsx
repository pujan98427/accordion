import React, { useState } from "react";
import { question } from "./accodionQuestion";
const MyAccordion = ({ question, answer }) => {
    const [show, setShow] = useState(false)

    return (
        <>

            <div className={show ? 'accodion-item active' : "accodion-item"}>
                <div className="accodion-title">
                    <h2>{question}</h2><button onClick={() => { setShow(!show) }} class="toggle-button">{show ? '−' : '+'}</button>
                </div>
                {show &&
                    <div className="accordion-content">
                        <p>{answer}</p>
                    </div>
                }
            </div>


        </>
    )
}

export default MyAccordion; 