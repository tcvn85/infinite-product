import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ProductType } from '../types/ProductType'
import { KEY_PRODUCT } from '../constants/QueryKey'
import { ResponseError } from '../utils/ResponseError'

const fetchProduct = async ({ id }: { id?: string }) => {
  const response = await axios.get<ProductType>(
    `https://dummyjson.com/products/${id}`
  )
  if (response.status !== 200) {
    throw new ResponseError('Failed to fetchProduct', response)
  }
  return response.data
}

export const useProduct = (id?: string) => {
  return useQuery({
    queryKey: [KEY_PRODUCT, id],
    queryFn: () => fetchProduct({ id }),
    refetchOnWindowFocus: false,
    retry: 0,
  })
}
