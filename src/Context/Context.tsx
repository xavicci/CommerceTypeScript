//CONTEXT.TSX
import { useContext, createContext, useState, useEffect } from "react";
import { Items, Props, Order, URL_API } from "../Global/globalConst";
import { useFetch } from "../utils/useFetch";


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
    isCheckoutSideMenuOpen: boolean,
    openCheckOutMenu: () => void,
    closeCheckOutMenu: () => void,
    order: Array<Order>,
    setOrder: React.Dispatch<React.SetStateAction<Array<Order>>>,
    items: Array<Items>,
    setItems: React.Dispatch<React.SetStateAction<Array<Items>>>,
    searchByTitle: string,
    setSearchByTitle: React.Dispatch<React.SetStateAction<string>>,
    filteredItems: Array<Items>,
    setfilteredItems: React.Dispatch<React.SetStateAction<Array<Items>>>,
    searchByCategory: string,
    setSearchByCategory: React.Dispatch<React.SetStateAction<string>>,

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


    //Checkout side menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false);

    const openCheckOutMenu = (): void => {
        setIsCheckoutSideMenuOpen(true);
    }
    const closeCheckOutMenu = (): void => {
        setIsCheckoutSideMenuOpen(false);
    }

    //Product Detail - Show Products
    const [productToShow, setProductToShow] = useState<Items>({} as Items);

    //Shoppi . Add Products to Cart

    const [cartProducts, setCartProducts] = useState<Array<Items>>([] as Array<Items>);

    //Shoppi Cart. Order

    const [order, setOrder] = useState<Array<Order>>([] as Array<Order>);

    //Get products
    const [items, setItems] = useState<Array<Items>>([]);
    const [filteredItems, setfilteredItems] = useState<Array<Items>>([] as Array<Items>);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState<string>('');

    // Get products by Category
    const [searchByCategory, setSearchByCategory] = useState<string>('');
    console.log(searchByCategory);

    useEffect(() => {
        const dataItems = useFetch(URL_API);
        dataItems.then(setItems);
    }, [URL_API]);

    const filteredItemsByTitle = (items: Items[], searchByTitle: string) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))
    }
    const filteredItemsCategory = (items: Items[], searchByCategory: string) => {
        return items?.filter(item => item.category?.toLowerCase().includes(searchByCategory.toLocaleLowerCase()))
    }

    const filterBy = (searchType: string, items: Items[], searchByTitle: string, searchByCategory: string): Items[] => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle);
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsCategory(items, searchByCategory);
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))
        }
        if (searchType === '') {
            return items;
        }
        return items;
    }
    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            setfilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        }
        if (searchByTitle && !searchByCategory) {
            setfilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        }
        if (!searchByTitle && searchByCategory) {
            setfilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        }
        if (!searchByTitle && !searchByCategory) {
            setfilteredItems(filterBy('', items, searchByTitle, searchByCategory))
        }

    }, [items, searchByTitle, searchByCategory]);

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
            isCheckoutSideMenuOpen,
            openCheckOutMenu,
            closeCheckOutMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setfilteredItems,
            searchByCategory,
            setSearchByCategory,
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
        isCheckoutSideMenuOpen: currentShoppingContext.isCheckoutSideMenuOpen,
        openCheckOutMenu: currentShoppingContext.openCheckOutMenu,
        closeCheckOutMenu: currentShoppingContext.closeCheckOutMenu,
        order: currentShoppingContext.order,
        setOrder: currentShoppingContext.setOrder,
        items: currentShoppingContext.items,
        setItems: currentShoppingContext.setItems,
        searchByTitle: currentShoppingContext.searchByTitle,
        setSearchByTitle: currentShoppingContext.setSearchByTitle,
        filteredItems: currentShoppingContext.filteredItems,
        setfilteredItems: currentShoppingContext.setfilteredItems,
        searchByCategory: currentShoppingContext.searchByCategory,
        setSearchByCategory: currentShoppingContext.setSearchByCategory,
    };
};