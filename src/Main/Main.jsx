import { Outlet } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";


const Main = () => {
    return (
        <div >


            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <div className="pt-16 pb-10">
                <Outlet></Outlet>
                </div>
                
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Main;