import { useEffect, useState } from "react";
import usePackage from "../../../hooks/usePackage";
import PackageCard from "../../Home/Tourism/OurPackages/PackageCard";

const AllPackages = () => {
    const path = 'allplace';
    const [Packages] = usePackage(path);
    console.log(Packages);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPackages, setfilteredPackages] = useState(Packages);
    useEffect(() => {
        // Filter services based on the initial value of `Packages` and the search query
        const filtered = Packages.filter(Package => {
            return Package.type.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setfilteredPackages(filtered);
    }, [Packages, searchQuery]);
    // setfilteredPackages(Packages);
    // Handle search button click
    console.log(filteredPackages);
    const handleSearch = () => {
        // Filter services based on the search query
        const filtered = Packages.filter(Package => {
            return Package.type.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setfilteredPackages(filtered);
    };

    return (
        <div>
            <div className="my-10">
                <h2 className="text-5xl font-bold pl-5  lg:pl-10 w-full lg:w-1/3 lg:mx-auto mb-4">All Packages</h2>
                <div className="flex w-full lg:w-1/3 pl-5  mx-auto">
                    <input type="search"
                        name="Search"
                        placeholder="Search..."
                        className="w-32 py-2 pl-5 lg:pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="button"
                        onClick={handleSearch}
                        className="px-8 py-1 ml-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-orange-500">Search</button>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 mt-10  gap-5 ">
                    {filteredPackages?.map((Package, idx) => (

                        <PackageCard key={idx} Package={Package} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllPackages;