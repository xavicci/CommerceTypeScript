// Card.tsx
import { PlusIcon } from "@heroicons/react/24/solid";
import { useShoppingContext } from "../../Context/Context";
import { Items } from "../../Global/globalConst"

export const Card = ({ title, price, category, image }: Items): JSX.Element => {

    const { incrementCount, openProductDetail, setProductToShow, setCartProducts } = useShoppingContext();

    const showProduct = (datos: Items): void => {
        openProductDetail();
        setProductToShow(datos);
    }
    const addProductsToCart = (e: React.MouseEvent<HTMLDivElement>, productData: Items): void => {
        incrementCount(e);
        setCartProducts(productList => [...productList, productData]);
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct({ title, price, category, image })}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5 rounded-full'>{category}</span>
                <img className='w-full h-full object-cover rounded-2xl' src={image} alt={title} />
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => addProductsToCart(e, { title, price, category, image })}
                >
                    <PlusIcon className='h-6 w-6' />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>{price}</span>
            </p>
        </div>
    )
}