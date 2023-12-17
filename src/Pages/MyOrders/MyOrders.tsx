import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout/Layout';
import { OrdersCard } from '../../Components/OrdersCard/OrdersCard';
import { useShoppingContext } from '../../Context/Context';
import './MyOrders.css';

export function MyOrders(): JSX.Element {

    const { order } = useShoppingContext();


    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80'>
                <h1>My Orders</h1>
            </div>
            {
                order.map((order, index) => {
                    return (<Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard  {...order} />
                    </Link>)
                })
            }
        </Layout>
    )
}