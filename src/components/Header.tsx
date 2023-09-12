import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <nav className="p-3 text-white bg-slate-500">
      <Link className="px-5" to="/">Home</Link>
      <Link className="px-5" to="/products">Products</Link>
    </nav>
  )
}