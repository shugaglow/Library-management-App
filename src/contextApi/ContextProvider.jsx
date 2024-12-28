/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
export const userContext = createContext ()
function ContextProvider({children}) {
    const [value, setValue] = useState(["americanah", "purplehibiscus", "thealchemist"])
    const [wantToReadArray, setWantToReadArray]= useState([])
    const contextValue = {value,setValue, setWantToReadArray, wantToReadArray}
    
    return (
        <userContext.Provider value={contextValue}>{children}</userContext.Provider>
    )
}

export default ContextProvider