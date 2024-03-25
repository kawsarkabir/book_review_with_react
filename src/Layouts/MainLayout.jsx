import { Outlet } from "react-router-dom"
import Nav from "../Pages/Nav"

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout