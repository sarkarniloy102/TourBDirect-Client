import usePackage from "../../../../hooks/usePackage";
import PackageCard from "./PackageCard";


const OurPackages = () => {
    const [Packages] = usePackage();
    // console.log(Packages);
    
return (
    <div className="px-4 grid grid-cols-3 gap-5">
        {
            Packages.map((Package, idx) => <PackageCard key={idx}
               Package={Package}
            ></PackageCard>)
        }

    </div>
);
};

export default OurPackages;