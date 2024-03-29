import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import { IProductList } from '../types/ProductType'
import { KEY_PRODUCTS_SEARCH } from '../constants/QueryKey'

const LIMIT = 20

const fetchProductSearch = async ({
  pageParam,
  searchText,
}: {
  pageParam: number
  searchText: string
}) => {
  try {
    const response = await axios.get<IProductList>(
      'https://dummyjson.com/products/search',
      {
        params: {
          skip: (pageParam - 1) * LIMIT,
          limit: LIMIT,
          select: 'title,price,thumbnail',
          q: searchText,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetchProductSearch')
  }
}

export const useProductSearch = (searchText: string) => {
  return useInfiniteQuery({
    queryKey: [KEY_PRODUCTS_SEARCH, searchText],
    queryFn: ({ pageParam = 1 }) =>
      fetchProductSearch({ pageParam, searchText }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.products.length === 0 ? undefined : allPages.length + 1,
  })
}
