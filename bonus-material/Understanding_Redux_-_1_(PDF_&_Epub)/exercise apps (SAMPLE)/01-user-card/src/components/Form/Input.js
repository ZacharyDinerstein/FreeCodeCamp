import React, { Component } from "react";

const Input = (props) => {
    const { value, name, handleOnChange } = props,
        upCaseName = name.charAt(0).toUpperCase() + name.substring(1);

    return (
        <div>
            <label htmlFor="">{upCaseName}</label>
            <input
                onChange={handleOnChange}
                value={value}
                type="text"
                name={name}
            />
        </div>
    )
}

export default Input;