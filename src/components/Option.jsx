import React, { useState } from 'react';

function Option(props) {
    const[isOver, setIsOver] = useState(false)

    function handleMouseOver() {
        setIsOver(prevState => !prevState);
    }

    function handleMouseOut() {
        setIsOver(prevState => !prevState);
    }
    return (
        <div>
            <input 
                className="option" 
                type="button" 
                value={props.option} 
                onClick={()=>props.onClickHandler(props.option)}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{backgroundColor: isOver && "grey"}}
            />
        </div>
    );
}

export default Option;