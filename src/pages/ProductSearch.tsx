import { useSearchParams } from 'react-router-dom'
import { useProductSearch } from '../hooks/useProductSearch'
import Error from '../components/Error'
import Loading from '../components/Loading'
import ProductList from '../components/ProductList'
import ProductSearchForm from '../components/ProductSearchForm'

const LIMIT = 20

export default function ProductSearch() {

  const [params] = useSearchParams('q')

  const searchText = params.get('q') ?? ''

  const { data, isError, isLoading, fetchNextPage, hasNextPage } = useProductSearch(searchText)

  const hasMore = (data?.pages?.[0].total || 0) > LIMIT && !!hasNextPage

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="mb-5 text-xl">Search result <strong>`{searchText}`</strong></h1>
        <div>
          <ProductSearchForm value={searchText} />
        </div>
      </div>
      {isError ? (
        <Error msg={'Searching product error'} />
      ) :
        (isLoading ? <Loading /> :
          (data?.pages?.[0].total ?
            <ProductList data={data} hasMore={hasMore} fetchNextPage={fetchNextPage} /> :
            <div>No product found</div>)
        )}
    </>
  )
}