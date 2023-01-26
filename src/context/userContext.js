import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const [greeting, setGreetings] = useState("Hello");
  
    return (
        <UserContext.Provider value={{ greeting, setGreetings }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }