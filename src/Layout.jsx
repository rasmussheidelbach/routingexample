import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
    return (
        <>
            <Header />
            <main className="mainpart">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
