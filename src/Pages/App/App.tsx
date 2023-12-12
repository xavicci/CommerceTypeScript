import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from '../Home/home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SingIn } from '../SignIn/SingIn';

import './App.css'

type Props = {};
type MyRoutes = Array<{ path: string, element: JSX.Element }>;

const AppRoutes = () => {

    const routesPath: MyRoutes = [
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-order', element: <MyOrders /> },
        { path: '/sign-in', element: <SingIn /> },
        { path: '/*', element: <NotFound /> },
    ];

    let routes = useRoutes(routesPath);

    return routes;
}


export const App = (props: Props): JSX.Element => {


    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}