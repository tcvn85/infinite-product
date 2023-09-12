import { useSearchParams } from 'react-router-dom'
import { useProductSearch } from '../hooks/useProductSearch'
import Error from '../components/Error'
import Loading from '../components/Loading'
import ProductList from '../components/ProductList'
import ProductSearchForm from '../components/ProductSearchForm'
import { useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ProductSearch() {

  const [params] = useSearchParams('q')
  const searchText = params.get('q')

  const { data, isError, isLoading, fetchNextPage, hasNextPage } = useProductSearch(searchText || '')

  const dataLength = useMemo(() => (data?.pages?.reduce((total, page) => total + page.products.length, 0) || 0), [data])


  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="mb-5 text-xl">Search result <strong>`{searchText}`</strong></h1>
        <div>
          <ProductSearchForm value={searchText} />
        </div>
      </div>
      {isError ? (
        <Error msg={'Product list error'} />
      ) :
        (isLoading ? <Loading /> :
          (<div>
            {dataLength ? (
              <InfiniteScroll
                dataLength={dataLength}
                next={() => fetchNextPage()}
                hasMore={hasNextPage || false}
                loader={<p className="text-center font-bold">Loading...</p>}
                endMessage={<p className="text-center font-bold">Yay! You have seen it all</p>}
              >
                {data?.pages?.map((page, index) =>
                  <ProductList key={index} products={page.products} />
                )}
              </InfiniteScroll>
            ) : <div>No product found</div>}
          </div>
          ))}
    </>
  )
}