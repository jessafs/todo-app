import React, { useState } from 'react';
import './accordion.css'
import { FaTrashAlt, FaFileAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";

function Accordion(Props) {
    const [isActive, setIsActive] = useState(false);
    const { title, content, id, handleOpenUpdateTodo, handleRemoveList } = Props
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    return (
        <div className="accordion">
            <div className="accordion-heading">
                <div className="accordion-container">
                    <p>{formattedTitle}</p>
                    <div className='action'>
                        <span onClick={() => setIsActive(!isActive)} >
                            {isActive ? <FaChevronDown className="chevron" /> : <FaChevronUp className="chevron"/>}&nbsp;&nbsp;
                        </span>
                        <span>
                            <FaFileAlt className="editIcon" onClick={() => handleOpenUpdateTodo(id)} />
                        </span>&nbsp;&nbsp;
                        <span>
                            <FaTrashAlt className="deleteIcon" onClick={() => handleRemoveList(id)} />
                        </span>

                    </div>
                </div>
            </div>
            {isActive && <div className="accordion-content">{content}
            </div>}
        </div>
    );
}

export default Accordion;
