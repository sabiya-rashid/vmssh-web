import React from 'react';


const Row = (props) => {
    return (
        <div className={`row mx-0 py-3 align-items-center ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Row;