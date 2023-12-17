import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import { Home } from '../Home/home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SingIn } from '../SignIn/SingIn';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Props } from '../../Global/globalConst';
import { ShoppingCartProvider } from '../../Context/Context';
import { CheckOutSideMenu } from '../../Components/CheckoutSideMenu/CheckOutSideMenu';
import './App.css';

const AppRoutes = (): JSX.Element | null => {

    const routesPath: Array<RouteObject> = [
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/my-orders/:id', element: <MyOrder /> },
        { path: '/sign-in', element: <SingIn /> },
        { path: '/*', element: <NotFound /> },
    ];

    let routes = useRoutes(routesPath);

    return routes;
}
export const App = ({ }: Props): JSX.Element => {

    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <CheckOutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}