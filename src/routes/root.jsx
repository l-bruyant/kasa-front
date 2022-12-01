import { Outlet } from "react-router-dom";
import Header from "../components/header"
import Footer from "../components/footer"

export default function Root() {
    return (
    <div id='app-content'>
        <Header />
                <Outlet />
        <Footer />
    </div>
    )
}