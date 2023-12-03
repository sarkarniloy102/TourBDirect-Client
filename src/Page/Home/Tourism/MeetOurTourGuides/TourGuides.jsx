
import TourGuideCard from "./TourGuideCard";
import usePackage from "../../../../hooks/usePackage";


const TourGuides = () => {
    const tourguide = 'tourguides'
    const [tourGuides] = usePackage(tourguide);
    return (
        <div className=" py-8">
            <div className="container mx-auto">
                
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
                    {tourGuides.map((tourGuide, index) => (
                        <TourGuideCard
                            key={index}
                            tourGuide={tourGuide}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourGuides;