import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useShoppingContext } from "../../Context/Context";
import { NavLink } from "react-router-dom"


type Props = { children?: React.ReactNode };

export const Navbar = ({ }: Props): JSX.Element => {

    const { cartProducts, setSearchByCategory, } = useShoppingContext();

    let activeStyle: string = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">

            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Zyneus Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('')}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => setSearchByCategory("women's clothing")}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('electronics')}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('jewelery')}
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory("men's clothing")}
                    >
                        Mens
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    xavicci@github
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6' />
                    <div>{cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}
