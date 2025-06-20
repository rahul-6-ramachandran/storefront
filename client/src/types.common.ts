export type Products = {
    name : string,
    _id : string,
    description : string,
    images : string[],
    price : number
}

export type ProductQuery = {
    page : string,
    limit : string

}

export type CreateCart = {
    productId : string
    quantity : number
}