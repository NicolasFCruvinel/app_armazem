import { createContext, useState } from "react";

export const ItemContext = createContext();

export function ItemContextProvider({children}){
    const [] = useState();

    return (
        <ItemContext.Provider>
            {children}
        </ItemContext.Provider>

    )
}