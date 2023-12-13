import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import { Home } from '../Home/home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SingIn } from '../SignIn/SingIn';
import './App.css'
import { Navbar } from '../../Components/Navbar/Navbar';

type Props = {};

const AppRoutes = (): JSX.Element | null => {

    const routesPath: Array<RouteObject> = [
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/sign-in', element: <SingIn /> },
        { path: '/*', element: <NotFound /> },
    ];

    let routes = useRoutes(routesPath);

    return routes;
}

export const App = (props: Props): JSX.Element => {

    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    )
}