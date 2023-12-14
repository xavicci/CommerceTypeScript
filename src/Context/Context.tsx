//CONTEXT.TSX
import { useContext, createContext, useState } from "react";
import { Props } from "../Global/globalConst";

interface countContext {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    incrementCount: () => void,
};

export const ShoppingCartContext = createContext<countContext | null>(null);

export const ShoppingCartProvider = ({ children }: Props) => {

    const [count, setCount] = useState<number>(0);

    const incrementCount = (): void => {
        setCount(value => (value + 1));
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            incrementCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

export const useShoppingContext = (): countContext => {
    const currentShoppingContext = useContext(ShoppingCartContext);

    if (!currentShoppingContext) {
        throw new Error(
            "Este contexto no es válido o es nulo"
        );
    }

    return {
        count: currentShoppingContext.count,
        setCount: currentShoppingContext.setCount,
        incrementCount: currentShoppingContext.incrementCount,
    };
};