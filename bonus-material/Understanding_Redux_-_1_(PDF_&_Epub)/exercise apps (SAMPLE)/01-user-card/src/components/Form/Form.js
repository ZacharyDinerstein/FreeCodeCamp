import React, { Component } from "react";

const Form = (props) => {
    const { name } = props.data,
        { handleOnChange } = props;

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">Name</label>
            <input 
                onChange={handleOnChange} 
                value={name} 
                type="text"
                name="name"
            />
        </form>
    )
}

export default Form;