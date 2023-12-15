import { useState, useEffect } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { Card } from '../../Components/Card/Card';
import { useFetch } from '../../utils/useFetch';
import { URL_API, Items, Props } from '../../Global/globalConst';
import { ProductDetail } from '../../Components/ProductDetail/ProductDetail';
import './home.css'

export function Home({ }: Props): JSX.Element {
    const [items, setItems] = useState<Array<Items>>([]);

    useEffect(() => {
        const dataItems = useFetch(URL_API);
        dataItems.then(setItems);
    }, [URL_API]);

    return (
        <Layout>
            Home
            <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map(value => <Card key={value.id} {...value} />)
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}