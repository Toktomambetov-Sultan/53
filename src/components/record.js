import React from 'react';
export default function Record(props) {
    return (
        <div className="record">
            <h5 className="todo">{props.todo}</h5>
            <button className="deleteBtn" onClick={props.deleteRecord}><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}