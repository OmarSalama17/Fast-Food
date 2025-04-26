"use client"
import { useContext  , createContext, useState} from "react"
import React from 'react'
const GlobalContext= createContext()

const ContextProvider = ({children}) => {
const [count , setCount]= useState(0)
  return (
<GlobalContext.Provider value={{count , setCount}}>
{children}
</GlobalContext.Provider>
)
}

export default ContextProvider
export function useGlobalContext() {
    return useContext(GlobalContext);
  }