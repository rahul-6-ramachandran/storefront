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