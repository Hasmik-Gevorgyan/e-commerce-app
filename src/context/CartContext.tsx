import { createContext } from "react";

export const GenericContext = createContext({} as any);

const ContextProvider = ({ children, value }: any) => {
    return <GenericContext.Provider value={value}>
        {children}
    </GenericContext.Provider>
}

export default ContextProvider;
