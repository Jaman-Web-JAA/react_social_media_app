import { createContext, useState, useEffect} from "react";
const DataContext = createContext({});

export const Dataprovider = ({children}) => {
     return(
        <DataContext.Provider value={{

        }}>
            {children}
        </DataContext.Provider>
     )
}

export default DataContext;