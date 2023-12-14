import { XMarkIcon } from '@heroicons/react/24/solid';
import { useShoppingContext } from '../../Context/Context';
import './stylesProductDetail.css';

export const ProductDetail = (): JSX.Element => {

    const { isProductDetail, closeProductDetail } = useShoppingContext();

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
                    <XMarkIcon className='h-6 w-6' onClick={closeDetailModal} />
                </div>
            </div>
        </aside>
    )
}
