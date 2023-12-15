//totalPrice.ts
import { Items } from "../Global/globalConst";

export const totalPrice = (products: Array<Items>): number => {
    let sum: number = 0;

    products.forEach(product => {
        sum += product.price
    });

    return sum;
}