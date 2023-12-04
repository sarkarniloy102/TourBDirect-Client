import { Outlet } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";


const Main = () => {
    return (
        <div >
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Main;