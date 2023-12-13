import { Layout } from '../../Components/Layout/Layout';
import { Card } from '../../Components/Card/Card';
import './home.css'

type Props = { children?: React.ReactNode };

export function Home({ }: Props): JSX.Element {

    return (

        <Layout>
            Home
            <Card />
        </Layout>


    )
}