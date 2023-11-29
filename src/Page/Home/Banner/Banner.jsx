import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto" >
                <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} interval={5000}>
                    <div>
                        <img className='h-[500px]' src="https://i.ibb.co/9qbxfcX/carosel1.jpg" alt="Place 1" />
                    </div>
                    <div>
                        <img className='h-[500px]' src="https://i.ibb.co/Sdk56tm/carosel2.jpg" alt="Place 2" />
                    </div>
                    {/* Add more carousel items as needed */}
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
