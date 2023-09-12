export type ProductType = {
  id: number
  title: string
  price: number
  images: string[]
  thumbnail: string
  description?: string
}

export interface IProductList {
  products: ProductType[]
  limit: number
  skip: number
  total: number
}
