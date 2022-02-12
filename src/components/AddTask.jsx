import React from 'react'
import { useDispatch } from 'react-redux';
import {addtask} from '../JS/TaskSlice';
import { useState } from 'react';


const AddTask = () => {

    const [value, setValue] = useState("");

    const sendOut = useDispatch(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        sendOut(
            addtask({
                description: value
            })
        );
        setValue("");
    }

    return (
        <div className='add--task'>
            
            <h1>
                <span>Your personal</span>
                <br />
                <span>todo-list</span>  
            </h1>

            <form className="adding--box" onSubmit={handleSubmit}>
                    
                <input 
                    type="text" 
                    placeholder="Add task..." 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button className="bg-color">
                    <i className ="fas fa-plus-circle"></i>
                </button>
            </form>
        </div>
    )
}

export default AddTask;

//The AddTask component is a success.
