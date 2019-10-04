import React, { Component } from "react";

const Input = (props) => {
    const { name, location } = props.data,
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
            <label htmlFor="">Location</label>
            <input 
                onChange={handleOnChange} 
                value={location} 
                type="text"
                name="location"
            />
        </form>
    )
}

export default Input;