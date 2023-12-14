//CONTEXT.TSX
import { useContext, createContext, useState } from "react";
import { Props } from "../Global/globalConst";

interface countContext {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    incrementCount: (event: React.MouseEvent<HTMLDivElement>) => void,
    isProductDetail: boolean,
    openProductDetail: () => void,
    closeProductDetail: () => void,
};

export const ShoppingCartContext = createContext<countContext | null>(null);

export const ShoppingCartProvider = ({ children }: Props) => {

    const [count, setCount] = useState<number>(0);

    const [isProductDetail, setIsProductDetail] = useState<boolean>(false);

    const openProductDetail = (): void => {
        setIsProductDetail(true);
    }
    const closeProductDetail = (): void => {
        setIsProductDetail(false);
    }

    const incrementCount = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setCount(value => (value + 1));
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            incrementCount,
            isProductDetail,
            openProductDetail,
            closeProductDetail,

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
        isProductDetail: currentShoppingContext.isProductDetail,
        openProductDetail: currentShoppingContext.openProductDetail,
        closeProductDetail: currentShoppingContext.closeProductDetail,
    };
};