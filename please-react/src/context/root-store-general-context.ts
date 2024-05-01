import { createContext, useContext } from "react";
import RootStoreGeneral from "../stores/root-store-general";


export const RootStoreGeneralContext = createContext<RootStoreGeneral|null>(null);

export const useStores = () => {
    const context = useContext(RootStoreGeneralContext);
    if (context === null)
    {
        throw new Error("Дай нормальный контекст");
    }
    
    return context
}
