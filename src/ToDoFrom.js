import React, { useState } from 'react';

const ToDoFrom = (props) => {
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id:Math.floor(Math.random()*1000)
        //     text:input
        // })

        setInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a todo' value={input} name='text' onChange={handleChange} />
            <button className='btn'>Add todo</button>
        </form>
    );
};

export default ToDoFrom;