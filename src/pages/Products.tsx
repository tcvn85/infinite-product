import Loading from '../components/Loading'
import ProductSearchForm from '../components/ProductSearchForm'
import Error from '../components/Error'
import { useProducts } from '../hooks/useProducts'
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductList from '../components/ProductList'
import { useMemo } from 'react';

export default function Products() {

  const { data, isError, isLoading, fetchNextPage, hasNextPage } = useProducts()

  const dataLength = useMemo(() => (data?.pages?.reduce((total, page) => total + page.products.length, 0) || 0), [data])

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="mb-5 text-xl">Products</h1>
        <div>
          <ProductSearchForm />
        </div>
      </div>
      {isError ? (
        <Error msg={'Product list error'} />) :
        (
          isLoading ? <Loading /> :
            <div>
              {data ? (
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
              ) : null}
            </div>
        )}
    </>
  )
}