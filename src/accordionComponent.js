import React, { useState } from "react";
import { question } from "./accodionQuestion";
import MyAccordion from "./accordion";
const Accordion = (props) => {
    const [data, setData] = useState(question)

    return (
        <>
            {
                data.map((currElement) => {
                    const { id } = currElement;
                    return <MyAccordion key={id} {...currElement} />
                })
            }

        </>
    )
}

export default Accordion; 