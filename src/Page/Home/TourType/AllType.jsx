import usePackage from "../../../hooks/usePackage";
import SingleTypeCard from "./SingleTypeCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AllType = () => {
    const travel = 'allplace';
    const [travelPlaces] = usePackage(travel);
    const uniqueTypes = new Set();

    // Customize slick carousel settings
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default number of slides
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="py-7">
            <p className="text-center text-xs">Choose a Tour from</p>
            <h2 className="text-center text-4xl font-bold pb-5">Tour Type</h2>
            <hr className="border-gray-400" />

            <div className="lg:px-8 md:px-4">
                {/* Apply padding on larger screens */}
                <Slider {...slickSettings}>
                    {travelPlaces.map((travelPlace, idx) => {
                        if (!uniqueTypes.has(travelPlace.type)) {
                            uniqueTypes.add(travelPlace.type);
                            return (
                                <SingleTypeCard key={idx} travelPlace={travelPlace}></SingleTypeCard>
                            );
                        }
                        return null; // Skip rendering for duplicate types
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default AllType;
