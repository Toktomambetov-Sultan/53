import React from 'react';
export default function Record(props) {
    return (
        <div className="record">
            <h5 className="todo">{props.todo}</h5>
            <label className="label">
                <input type="checkbox" className="checkbox" onChange={props.changeCheck}/>
                {
                    props.isDone?
                    (<div className="ans isDone">yes</div>):
                    (<div className="ans isNotDone">no</div>)
                }
            </label>
            <button className="deleteBtn" onClick={props.deleteRecord}><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}