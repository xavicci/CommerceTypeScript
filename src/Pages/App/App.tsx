import { Home } from '../Home/home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SingIn } from '../SignIn/SingIn';

import './App.css'

export function App() {
    return (
        <div className='text-5xl text-fuchsia-900'>
            <Home />
            <MyAccount />
            <MyOrders />
            <NotFound />
            <SingIn />
        </div>
    )
}