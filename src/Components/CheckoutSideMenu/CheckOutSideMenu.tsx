//checkOutSideMenu.tsx
import { useShoppingContext } from '../../Context/Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { OrderCard } from '../OrderCard/OrderCard';
import { Items } from '../../Global/globalConst';
import { totalPrice } from '../../utils/totalPrice';
import { Link } from 'react-router-dom';
import './checkOutSideMenu.css';

export const CheckOutSideMenu = (): JSX.Element => {

    const { isCheckoutSideMenuOpen, closeCheckOutMenu, cartProducts, setCartProducts, setOrder } = useShoppingContext();

    const closeCheckOutModal = () => {
        closeCheckOutMenu();
    }

    const handleDelete = (productCart: Items): void => {
        const filteredProducts = cartProducts.filter(product => product.id != productCart.id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = (cartProducts: Array<Items>): void => {
        const orderToAdd = {
            date: '01.02.23',
            product: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        };
        setOrder(order => [...order, orderToAdd]);
        setCartProducts([]);
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'checkout-side-menu flex flex-col fixed right-0 border border-black  rounded-lg bg-white' : 'hidden'}`}
        >
            <div className='flex justify-between items-center p-6 '>
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
          [&::-webkit-scrollbar-thumb]:bg-gray-300
            flex-1'

            >
                {cartProducts.map((product) =>
                    <OrderCard
                        key={product.id}
                        {...product}
                        handleDelete={handleDelete}
                    />
                )}
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts).toFixed(2)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black w-full py-3 text-white rounded-md' onClick={() => handleCheckout(cartProducts)}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}
