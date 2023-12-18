import { Layout } from '../../Components/Layout/Layout';
import { Card } from '../../Components/Card/Card';
import { ProductDetail } from '../../Components/ProductDetail/ProductDetail';
import { useShoppingContext } from '../../Context/Context';
import './home.css';

export function Home(): JSX.Element {

    const { setSearchByTitle, filteredItems } = useShoppingContext();

    const renderView = () => {
        if (filteredItems?.length > 0) {
            return (
                filteredItems?.map(value => <Card key={value.id} {...value} />)
            )
        } else {
            return (<div> We don't have anything ...</div>)
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80'>
                <h1 className='font-medium text-xl'>Exclusive products</h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-3 mt-2 mb-6 focus:outline-none'
                onChange={(event) => setSearchByTitle(event.target.value)}
            />
            <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}