export const URL_API: string = 'https://api.escuelajs.co/api/v1/products';
export type Props = { children?: React.ReactNode };
export type Items = { id: number, title: string, price: number, category: { name: string }, images: Array<string> };