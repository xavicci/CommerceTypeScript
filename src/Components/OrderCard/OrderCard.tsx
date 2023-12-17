// ORDERCARD.TSX
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Items } from "../../Global/globalConst"

export const OrderCard = ({ id, title, price, image, handleDelete }: Items): JSX.Element => {

    let renderXmarkIcon: JSX.Element =
        <XMarkIcon
            className='h-6 w-6 cursor-pointer'
            onClick={() => handleDelete({ id })}
        />

    return (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-contain' src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {handleDelete && renderXmarkIcon}
            </div>

        </div>
    )
}
