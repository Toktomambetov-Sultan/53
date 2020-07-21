import React from 'react';
export default function AppForm(props) {
    return (
        <div className="form">
            <div className="container">
                <input className='input' id="formInput" />
                <button className='addBtn' onClick={props.onHeaderClick}>
                    add
                </button>
            </div>
        </div>
    )
}