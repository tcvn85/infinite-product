import { ProductType } from "../types/ProductType"
import { Link } from 'react-router-dom'

type ProductItemProps = {
  product: ProductType
}

export default function ProductItem({ product }: ProductItemProps) {
  const { title, thumbnail, price, id } = product
  const url = `/product/${id}`
  return (
    <div className="flex flex-col justify-between mb-10 border rounded-lg">
      <div>
        <Link to={url}>
          <img src={thumbnail} alt={title} className="object-center w-full p-5 max-h-60" />
        </Link>
        <div className="px-4">
          <h2 className="text-lg font-bold leading-6 mb-2">{title}</h2>
          <div className="mb-5 text-green-800">Price: ${price}</div>
        </div>
      </div>
      <div className="px-4">
        <Link
          className="px-5 text-white w-full block bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm  py-2.5 text-center mb-3"
          to={url}
        >
          View Product
        </Link>
      </div>

    </div >
  )
}