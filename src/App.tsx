
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Layout from './components/layout/DefaultLayout'
const Loading = lazy(() => import('./components/Loading'))
const Home = lazy(() => import('./pages/Home'))
const Product = lazy(() => import('./pages/Product'))
const Products = lazy(() => import('./pages/Products'))
const ProductSearch = lazy(() => import('./pages/ProductSearch'))
const NoMatch = lazy(() => import('./pages/NoMatch'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/search" element={<ProductSearch />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
