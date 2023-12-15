import { XMarkIcon } from '@heroicons/react/24/solid';
import { useShoppingContext } from '../../Context/Context';
import './stylesProductDetail.css';

export const ProductDetail = (): JSX.Element => {

    const { isProductDetail, closeProductDetail, productToShow } = useShoppingContext();

    const closeDetailModal = () => {
        closeProductDetail();
    }

    return (
        <aside
            className={`${isProductDetail ? 'product-detail flex flex-col fixed right-0 border border-black  rounded-lg bg-white' : 'hidden'}`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 cursor-pointer' onClick={closeDetailModal} />
                </div>
            </div>
            <div className='flex flex-col h-full justify-center'>
                <figure className='px-6'>
                    <img className='w-full h-full rounded-lg' src={productToShow.image} alt={productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl'>${productToShow.price}</span>
                    <span className='font-medium text-md'>{productToShow.title}</span>
                </p>
            </div>
        </aside>
    )
}