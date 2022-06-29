export class Product {
    id: any;
    title: any;
    description: any;
    price: any;
    discountPercentage: any;
    rating: any;
    stock: any;
    brand: any;
    category: any;
    thumbnail: any;
    images: any[] = [];
    isBuy: boolean = false;
}

export class ResponseResult {
    products: Product[] = [];
    total: number;
    skip: number;
    limit: number;
}