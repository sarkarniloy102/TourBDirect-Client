import { useEffect, useState } from "react";
import TourGuideCard from "./TourGuideCard";


const TourGuides = () => {
    const [tourGuides, settourGuides] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('tourguide.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                settourGuides(data);
                // setLoading(false);
            });
    }, [])
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