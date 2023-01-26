import React from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () => {

    // to be implemented in context
    const { setGreetings } = useContext(UserContext);

    const handleChange = (event) => {
        setGreetings(event.target.value);
    }
    
    return (
        <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
            <h4>Settings</h4>
            <input type={'text'} onChange={handleChange}/>
        </div>
    )
}