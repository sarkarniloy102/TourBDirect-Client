// import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUserRole = () => {
    const { user } = useAuth()
    console.log(user);
    const axiosSecure = useAxiosSecure();
    const { data: userType, isLoading, isError } = useQuery({
        queryKey: [user?.email, 'userType'],
        queryFn: async () => {
            console.log("Making request to:", `/users/role/${user.email}`);
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            console.log("Response data:", res);
            return res.data;
        }
    });
    console.log("User type:", userType);

    if (isLoading) {
        // If the data is still loading
        return ["Loading", isLoading];
    } else if (isError) {
        // Handle error state
        console.error("Error fetching user role");
        return ["Error", isLoading];
    }
    // else if (userType && userType.role) 
    else {
        // Check the role and return the corresponding string
        // const { role } = userType;
        if (user.email === "babusarkar273@gmail.com") {
            return ["admin", isLoading];
        } else if (user.email === "niloysarkarbabu@gmail.com") {
            return ["tourguide", isLoading];
        }
    }

    // If none of the conditions are met, it simply returns without a default value
    return ["user", isLoading, userType];
};

export default useUserRole;