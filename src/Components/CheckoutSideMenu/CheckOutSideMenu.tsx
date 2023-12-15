//checkOutSideMenu.tsx
import { useShoppingContext } from '../../Context/Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { OrderCard } from '../OrderCard/OrderCard';
import { Items } from '../../Global/globalConst';
import { totalPrice } from '../../utils/totalPrice';
import './checkOutSideMenu.css';

export const CheckOutSideMenu = (): JSX.Element => {

    const { isCheckoutSideMenuOpen, closeCheckOutMenu, cartProducts, setCartProducts } = useShoppingContext();

    const closeCheckOutModal = () => {
        closeCheckOutMenu();
    }

    const handleDelete = (productCart: Items): void => {
        const filteredProducts = cartProducts.filter(product => product.id != productCart.id)
        setCartProducts(filteredProducts)
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'checkout-side-menu flex flex-col fixed right-0 border border-black  rounded-lg bg-white' : 'hidden'}`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 cursor-pointer' onClick={closeCheckOutModal} />
                </div>
            </div>
            <div className='
            px-6  overflow-y-scroll 
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300'
            >
                {cartProducts.map((product) =>
                    <OrderCard
                        key={product.id}
                        {...product}
                        handleDelete={handleDelete}
                    />
                )}
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts).toFixed(2)}</span>
                </p>
            </div>
        </aside>
    )
}
