import React, { createContext, useState } from 'react';

export const Context = createContext();


const init ={
    name:"",
    display:"",
    workname:"",
    worlURL:"",
    userType:""
  }
export const ContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])
    const [userData, setUserData] = useState(init)

    const addToCart = (data) => {
        setCart([...cart, data])
    }
    const delToCart = () => {
        setCart([])
    }
    // const addToServer = () =>{
    //     f
    // }
    return <Context.Provider value={
        {
            cart,
            addToCart,
            delToCart
        }
    }>
        {children}
    </Context.Provider>
}