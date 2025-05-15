"use client"
import Loading from "@/app/loading"
import { useContext  , createContext, useState} from "react"
import React from 'react'
const GlobalContext= createContext()

const ContextProvider = ({children}) => {
const [count , setCount]= useState(0)
const [loader , setLoader] = useState(false)
  return (
<GlobalContext.Provider value={{count , setCount , setLoader}}>
{children}
{
  loader &&(
    <Loading/>
  )
}
</GlobalContext.Provider>
)
}

export default ContextProvider
export function useGlobalContext() {
    return useContext(GlobalContext);
  }