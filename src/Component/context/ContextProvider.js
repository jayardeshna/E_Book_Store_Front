import React, { createContext, useState } from 'react'


export const adddata = createContext("");
export const logindata = createContext("");
export const deldata = createContext("");
export const update = createContext("")
const ContextProvider = ({ children }) => {

    const [udata, setUdata] = useState("");
    const [ldata, setLdata] = useState("");
    const [dltdata, setDLTdata] = useState("");
    const [updata, setUPdata] = useState("");
       

    return (
        <adddata.Provider value={{ udata, setUdata }}>
            <logindata.Provider value={{ ldata, setLdata }}>
              <update.Provider value={{updata, setUPdata}}>
                <deldata.Provider value={{dltdata, setDLTdata}}> 
                    {children}
                 </deldata.Provider>
              </update.Provider>
            </logindata.Provider>
        </adddata.Provider>
    )
}

export default ContextProvider;