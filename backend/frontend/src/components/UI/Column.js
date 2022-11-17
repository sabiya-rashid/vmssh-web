import React from 'react';

const Column = (props) => {
    return (
        <div className={`${props.className}`}>{props.children}</div>
    )
}

export default Column;