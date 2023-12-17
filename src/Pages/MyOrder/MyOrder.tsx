//MYORDERS.TSX
import { useShoppingContext } from '../../Context/Context';
import { Layout } from '../../Components/Layout/Layout';
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import './MyOrder.css';

export const MyOrder = (): any => {

    const { order } = useShoppingContext();
    const currentPath = window.location.pathname;

    let index: number = parseInt(currentPath.substring(currentPath.lastIndexOf('/') + 1));

    if (isNaN(index)) {
        index = order?.length - 1
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {order[index]?.product.map(item =>
                    <OrderCard
                        key={item.id}
                        {...item}
                    />
                )}
            </div>
        </Layout>
    )
}
