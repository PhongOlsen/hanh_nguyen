import {createContext, useState} from "react";

export const LayoutContext = createContext<any>({});

export const LayoutContextProperty = ({children}: any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LayoutContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            {children}
        </LayoutContext.Provider>
    )
}
