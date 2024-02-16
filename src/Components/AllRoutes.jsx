import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ownerdetails" />
    </Routes>
}
export default AllRoutes;