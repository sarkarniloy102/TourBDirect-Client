import { useState, useEffect } from 'react';
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserRole = () => {
    const { user } = useAuth();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const currentUser = user || storedUser;
    console.log(currentUser.email);

    const axiosSecure = useAxiosSecure();

    const [userType, setUserType] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const res = await axiosSecure.get(`/users/role/${currentUser.email}`);
                console.log(res);
                setUserType(res.data);
            } catch (error) {
                setError(true);
                console.error("Error fetching user role", error);
            } finally {
                setLoading(false);
            }
        };

        if (currentUser) {
            fetchUserRole();
        }

    }, [axiosSecure, currentUser]);
    console.log( 'current user is',userType);

    if (isLoading) {
        return ["Loading", isLoading];
    } else if (isError) {
        return ["Error", isLoading];
    } else if (userType && userType.role) {
        const { role } = userType;
        if (role === "admin") {
            return ["admin", isLoading];
        } else if (role === "tourguide") {
            return ["tourguide", isLoading];
        }
    }

    return ["user", isLoading, userType];
};

export default useUserRole;
