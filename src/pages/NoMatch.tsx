import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl mb-3">Nothing to see here!</h1>
      <div>
        <Link className="px-5 text-white inline-block bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300  font-medium rounded-lg text-sm  py-2.5 text-center mb-3" to="/">Go to the home page</Link>
      </div>
    </div>
  )
}