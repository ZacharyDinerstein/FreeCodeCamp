import React, { Component } from "react";
import Input from "./Input";
import { store } from "./../../store";
import { updateCardData } from './../../actions';

const Form = () => {
    const STATE = store.getState();

    const handleOnChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        store.dispatch(updateCardData(name, value));
    }
    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {Object.keys(STATE).map((key,index) => {
                let item = STATE[key];
                return <Input 
                    value={item} 
                    name={key} 
                    handleOnChange={handleOnChange} 
                    key={index}
                />
            })}
        </form>
    )
}

export default Form;