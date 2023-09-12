import { Outlet } from "react-router-dom"
import Header from "../Header"

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  )
}