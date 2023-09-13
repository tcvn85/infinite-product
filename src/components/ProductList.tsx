
import InfiniteScroll from 'react-infinite-scroll-component'
import { useMemo } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import ProductItem from '../components/ProductItem'
import { IProductList } from '../types/ProductType'


interface ProductListProps {
  data: InfiniteData<IProductList>
  hasMore: boolean
  fetchNextPage: () => void
}

export default function ProductList({ data, hasMore, fetchNextPage }: ProductListProps) {

  const dataLength = useMemo(() => (data?.pages?.reduce((total, page) => total + page.products.length, 0) || 0), [data])

  return (
    <>
      {data ? (
        <InfiniteScroll
          dataLength={dataLength}
          next={fetchNextPage}
          hasMore={hasMore}
          pullDownToRefreshThreshold={50}
          loader={<p className="text-center font-bold">Loading...</p>}
          endMessage={<p className="text-center font-bold">Yay! You have seen it all</p>}
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5'>
            {data?.pages?.map(page =>
              page?.products?.map(product =>
                <ProductItem key={product.id} product={product} />))
            }
          </div>
        </InfiniteScroll>
      ) : <div>No product found</div>}
    </>
  )
}