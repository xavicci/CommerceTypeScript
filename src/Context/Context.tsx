//CONTEXT.TSX
import { useContext, createContext, useState } from "react";
import { Items, Props } from "../Global/globalConst";

interface countContext {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    incrementCount: (event: React.MouseEvent<HTMLDivElement>) => void,
    isProductDetail: boolean,
    openProductDetail: () => void,
    closeProductDetail: () => void,
    productToShow: Items,
    setProductToShow: React.Dispatch<React.SetStateAction<Items>>,
    cartProducts: Array<Items>,
    setCartProducts: React.Dispatch<React.SetStateAction<Array<Items>>>,
};

export const ShoppingCartContext = createContext<countContext | null>(null);

export const ShoppingCartProvider = ({ children }: Props) => {
    //Shopping Cart - Increment quantity
    const [count, setCount] = useState<number>(0);

    const incrementCount = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setCount(value => (value + 1));
    }

    //Product Detail - Open/Close
    const [isProductDetail, setIsProductDetail] = useState<boolean>(false);

    const openProductDetail = (): void => {
        setIsProductDetail(true);
    }
    const closeProductDetail = (): void => {
        setIsProductDetail(false);
    }

    //Product Detail - Show Products
    const [productToShow, setProductToShow] = useState<Items>({} as Items);

    //Shoppi . Add Products to Cart

    const [cartProducts, setCartProducts] = useState<Array<Items>>([] as Array<Items>);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            incrementCount,
            isProductDetail,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,

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
        productToShow: currentShoppingContext.productToShow,
        setProductToShow: currentShoppingContext.setProductToShow,
        cartProducts: currentShoppingContext.cartProducts,
        setCartProducts: currentShoppingContext.setCartProducts,
    };
};