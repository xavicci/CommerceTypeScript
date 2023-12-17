// ORDERCARD.TSX
// import { XMarkIcon } from "@heroicons/react/24/solid"
import { CalendarDaysIcon, ChevronRightIcon, CurrencyDollarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import { Order } from "../../Global/globalConst"

export const OrdersCard = ({ totalPrice, totalProducts, date }: Order): JSX.Element => {

    return (
        <div className="flex justify-between items-center mb-3 border rounded-lg p-3">
            <div className="flex items-center justify-between grow gap-2 px-4 w-80">
                <div className="flex gap-1 items-center justify-center">
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                    <p className="font-light text-sm">{`${totalProducts} ${totalProducts === 1 ? "producto" : "productos"}`}</p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-black" />
                    <p className="font-light text-sm">${totalPrice}</p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                    <CalendarDaysIcon className="h-6 w-6 text-black" />
                    <p className="font-light text-sm">{date}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <ChevronRightIcon className="h-6 w-6 text-black" />
            </div>
        </div>
    )
}
