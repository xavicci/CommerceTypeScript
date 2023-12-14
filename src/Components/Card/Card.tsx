import { PlusIcon } from "@heroicons/react/24/solid";
import { useShoppingContext } from "../../Context/Context";
import { Items } from "../../Global/globalConst"

export const Card = ({ title, price, category, images }: Items): JSX.Element => {
    const firstImg: string = images[0];

    const { incrementCount, openProductDetail } = useShoppingContext();

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={openProductDetail}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5 rounded-full'>{category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={firstImg} alt={title} />
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={incrementCount}
                ><PlusIcon className='h-6 w-6' /></div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>{price}</span>
            </p>
        </div>
    )
}