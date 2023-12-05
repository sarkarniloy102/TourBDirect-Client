import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navbar =
        <>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/community"}>Community</Link></li>
            <li><Link to={"/blogs"}>Blogs </Link></li>
            <li><Link to={"/aboutus"}>About Us</Link></li>
            <li><Link to={"/contactus"}>Contact Us</Link></li>

        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TourBDirect</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" ml-16 flex items-center mr-4 gap-3"><FaUserCircle className="text-2xl" />Profile</div>
                            <div tabIndex={0} className=" dropdown-content z-[5] w-40 card card-compact  shadow bg-primary text-primary-content">
                                <div className="card-body ">
                                    <div className="text-lg font-bold flex flex-col">
                                        <Link>Profile</Link>
                                        <span className="text-xs">{user?.displayName}</span>
                                    </div>
                                    <Link to={"/dashboard"} className="text-lg font-medium ">Dashboard</Link>
                                    <Link to={"/mybookings"} className="text-lg font-medium ">My Bookings</Link>
                                    <Link to={"/mywishlist"} className="text-lg font-medium ">WishList</Link>
                                    <Link className="text-lg font-medium" onClick={handleLogOut} >LogOut</Link>

                                </div>
                            </div>
                        </div>

                    </> : <>
                        <Link className="btn btn-ghost" to="/login">Login/Register</Link>
                    </>
                }
            </div>

        </div>
    );
};

export default Navbar;