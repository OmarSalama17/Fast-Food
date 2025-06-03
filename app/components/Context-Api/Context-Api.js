"use client"
import Loading from "@/app/loading"
import { useContext  , createContext, useState} from "react"
import React from 'react'
const GlobalContext= createContext()

const ContextProvider = ({children}) => {
const [cart , setCart]= useState([])
const [loader , setLoader] = useState(false)
  return (
<GlobalContext.Provider value={{cart , setCart , setLoader}}>
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