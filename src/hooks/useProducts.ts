import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import { IProductList } from '../types/ProductType'
import { KEY_PRODUCTS } from '../constants/QueryKey'

const LIMIT = 20

const fetchProducts = async ({ pageParam }: { pageParam: number }) => {
  try {
    const response = await axios.get<IProductList>(
      'https://dummyjson.com/products',
      {
        params: {
          skip: (pageParam - 1) * LIMIT,
          limit: LIMIT,
          select: 'title,price,thumbnail',
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetchProducts')
  }
}

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: [KEY_PRODUCTS],
    queryFn: ({ pageParam = 1 }) => fetchProducts({ pageParam }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.products.length === 0 ? undefined : allPages.length + 1,
  })
}
