import {
    FaHome,
    FaList,
    FaRegComments,
    FaRegRegistered,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineManageAccounts } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

const Dashboard = () => {
    const [role,userType, isLoading] = useUserRole();
    console.log('role is',role,userType);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                loading...
            </div>
        );
    }

    const AdminNavLinks = (
        <>
            <li>
                <NavLink
                    to="/dashboard/adminHome"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <FaHome className="mr-3" />
                    Admin Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/add-a-camp"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <MdOutlineManageAccounts className="mr-3" />
                    Add A Package
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/manageCamps"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <FaList className="mr-3" />
                    Manage User
                </NavLink>
            </li>
        </>
    );

    const TourGuideNavLinks = (
        <>
            <li>
                <NavLink
                    to="/dashboard/healthcareProfessionalHome"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <FaHome className="mr-3" />
                    My Assigned Tours
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/professional-profile"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <FaRegComments className="mr-3" /> My Profile
                </NavLink>
            </li>
        </>
    );

    const UserNavLinks = (
        <>
            <li>
                <NavLink
                    to="/dashboard/userHome"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <FaHome className="mr-3" />
                    User Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/participant-profile"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <ImProfile className="mr-3" />
                    Update Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/registered-camps"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                >
                    <FaRegRegistered className="mr-3" />
                    Booked Package
                </NavLink>
            </li>
        </>
    );

    return (
        <>

            <div className="flex h-screen">
                <div className="w-64 bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800 p-5">
                    <div className="mb-10">
                        <div className="text-2xl font-bold mb-2">Dashboard</div>
                    </div>
                    <ul className="space-y-2">
                        {role === "admin" && AdminNavLinks}
                        {role === "tourguide" &&
                            TourGuideNavLinks}
                        {role === "user" && UserNavLinks}
                        <hr className="my-4 border-t border-gray-300" />
                        <li>
                            <NavLink
                                to="/"
                                className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                            >
                                <FaHome className="mr-3" /> Home
                            </NavLink>
                        </li>
                        {/* ... other shared links */}
                    </ul>
                </div>
                <div className="flex-1 p-10 bg-gray-100">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;