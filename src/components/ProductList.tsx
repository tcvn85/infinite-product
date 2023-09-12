
import ProductItem from '../components/ProductItem'
import { ProductType } from '../types/ProductType'

interface ProductListProps {
  products: ProductType[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5'>
      {products ? products.map((product: ProductType) => (
        <ProductItem key={product.id} product={product} />
      )) : <div>Don't find any product</div>}
    </div>
  )
}