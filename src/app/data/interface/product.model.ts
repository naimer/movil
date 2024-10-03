import { Rating } from "./rating.module";


export interface Product{ 

    id: number;
    title: string;
    price: number;
    description: string,
    category: string,
    image: string,
    rating: Rating,
}