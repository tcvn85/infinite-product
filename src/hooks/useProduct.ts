import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ProductType } from '../types/ProductType'
import { KEYS_PRODUCT } from '../constants/QueryKey'

const fetchProduct = async ({ id }: { id?: string }) => {
  const response = await axios.get<ProductType>(
    `https://dummyjson.com/products/${id}`
  )
  return response.data
}

export const useProduct = (id?: string) => {
  return useQuery({
    queryKey: [KEYS_PRODUCT, id],
    queryFn: () => fetchProduct({ id }),
    refetchOnWindowFocus: false,
    retry: 1,
  })
}
