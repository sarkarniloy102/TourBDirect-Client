import { useEffect, useState } from "react";


const usePackage = () => {
    const [Packages, setpackages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('travel.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setpackages(data);
                setLoading(false);
            });
    }, [])
    // console.log(Package);
    return [Packages, loading]
}

export default usePackage;

