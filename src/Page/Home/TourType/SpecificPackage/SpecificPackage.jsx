import { Link, useLoaderData } from "react-router-dom";
import PackageCard from "../../Tourism/OurPackages/PackageCard";


const SpecificPackage = () => {
    
    const specificPackage= useLoaderData();
    console.log(specificPackage);

    return (
        <div>
            <h2 className="text-4xl text-center text-green-700 ">{specificPackage[0].type}</h2>
            <hr className="mt-4 mb-10 " />
        <div className="px-4 grid grid-cols-3 gap-5">
            {
                specificPackage.map((Package, idx) => <PackageCard key={idx}
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

export default SpecificPackage;