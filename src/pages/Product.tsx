import Loading from '../components/Loading'
import Error from '../components/Error'
import { useProduct } from '../hooks/useProduct'
import { useParams } from 'react-router-dom'


export default function Product() {

  const { id } = useParams()
  const { data, isError, isLoading } = useProduct(id)

  return (
    <>
      <div className="mb-5">
        <h2 className="mb-5 text-xl">Product</h2>
      </div>
      {isError ? (<Error msg={`Product not found`} />) :
        (isLoading ?
          <Loading /> :
          (
            <div className="grid grid-cols-3 gap-10">
              <div><img src={data?.thumbnail} alt={data?.title} /></div>
              <div className="col-span-2">
                <h1 className="font-bold text-xl mb-2">{data?.title}</h1>
                <div className="mb-2">Price: <strong>${data?.price}</strong></div>
                <div className="mb-2"><p>{data?.description}</p></div>
              </div>
            </div>
          )
        )}
    </>
  )
}