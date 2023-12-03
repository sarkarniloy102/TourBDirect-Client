import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const usePackage = (path) => {
    const AxiosSecure = useAxiosSecure();
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosSecure.get(`/${path}`);
                setPackages(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [AxiosSecure,path]);

    return [packages, loading];
}

export default usePackage;
