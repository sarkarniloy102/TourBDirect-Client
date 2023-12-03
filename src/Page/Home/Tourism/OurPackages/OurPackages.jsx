import { Link } from "react-router-dom";
import usePackage from "../../../../hooks/usePackage";
import PackageCard from "./PackageCard";


const OurPackages = () => {
    const path='travelplace'
    const [Packages] = usePackage(path);
    // console.log(Packages);

    return (
        <div>
            <div className="px-4 grid grid-cols-3 gap-5">
                {
                    Packages.map((Package, idx) => <PackageCard key={idx}
                        Package={Package}
                    ></PackageCard>)
                }

            </div>
            <div className="text-center mt-5">
            <Link to={'/allpackages'} className="text-white bg-slate-800 hover:bg-orange-600 py-2 px-4 rounded-md">
                All Packages
            </Link>
            </div>
           
        </div>

    );
};

export default OurPackages;