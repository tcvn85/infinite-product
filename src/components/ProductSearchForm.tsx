interface ProductSearchFormProps {
  value?: string | null
}

export default function ProductSearchForm({ value }: ProductSearchFormProps) {
  return (
    <form action='/products/search' method="get">
      <div className="relative">
        <input autoComplete="off" defaultValue={value ?? ''} name="q" type="search" className="block px-3 py-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg w-60 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search product..." required />
        <button type="submit" className="text-white absolute left-2.5 bottom-2.5">
          <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </div>
    </form>
  )
}