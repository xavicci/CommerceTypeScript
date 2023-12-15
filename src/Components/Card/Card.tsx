// Card.tsx
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useShoppingContext } from "../../Context/Context";
import { Items } from "../../Global/globalConst"

export const Card = ({ id, title, price, category, image }: Items): JSX.Element => {

    const { incrementCount, openProductDetail, closeProductDetail, isProductDetail, productToShow, setProductToShow, cartProducts, setCartProducts, openCheckOutMenu, closeCheckOutMenu } = useShoppingContext();

    const showProduct = (datos: Items): void => {
        openProductDetail();
        setProductToShow(datos);
        closeCheckOutMenu();

        if (isProductDetail && datos.title === productToShow.title) {
            closeProductDetail();
        }
    }
    const addProductsToCart = (event: React.MouseEvent<HTMLDivElement>, productData: Items): void => {
        incrementCount(event);
        openCheckOutMenu();
        closeProductDetail();
        setCartProducts(productList => [...productList, productData]);
    }

    const showCheckMenu = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();
        closeProductDetail();
        openCheckOutMenu();
    }

    const renderICon = (product: Items): JSX.Element => {

        const isInCart: boolean = cartProducts.some(productCart => productCart.id === product.id);

        if (isInCart) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => showCheckMenu(event)}
                >
                    <CheckIcon className='h-6 w-6' />
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductsToCart(event, product)}
                >
                    <PlusIcon className='h-6 w-6' />
                </div>
            )
        }
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct({ title, price, category, image })}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5 rounded-full'>{category}</span>
                <img className='w-full h-full rounded-2xl object-contain' src={image} alt={title} />

                {renderICon({ id, title, price, category, image })}

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    )
}