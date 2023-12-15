export const URL_API: string = 'https://fakestoreapi.com/products';
export type Props = { children?: React.ReactNode };
export type Items = { id?: number, title: string, price: number, category?: string, image: string, handleDelete?: any };