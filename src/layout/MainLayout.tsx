import { Outlet } from "react-router-dom";

import "./MainLayout.css";
import { Footer, Navigation } from "./components";

export const MainLayout = () => {
    return ( 
    <> 
        <Navigation />
        <Outlet />
        <Footer />
    </>
    );
}