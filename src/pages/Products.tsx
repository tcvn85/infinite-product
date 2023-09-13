import Loading from '../components/Loading'
import ProductSearchForm from '../components/ProductSearchForm'
import Error from '../components/Error'
import { useProducts } from '../hooks/useProducts'
import ProductList from '../components/ProductList'
const LIMIT = 20

export default function Products() {

  const { data, isError, isLoading, fetchNextPage, hasNextPage } = useProducts()

  const hasMore = (data?.pages?.[0].total || 0) > LIMIT && !!hasNextPage

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="mb-5 text-xl">Products</h1>
        <div>
          <ProductSearchForm />
        </div>
      </div>
      {isError ? (
        <Error msg={'Product list error'} />
      ) : (
        isLoading ? <Loading /> :
          <ProductList data={data} hasMore={hasMore} fetchNextPage={fetchNextPage} />
      )}
    </>
  )
}