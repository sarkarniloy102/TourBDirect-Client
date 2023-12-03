

const AboutUs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
                <h1 className="text-3xl font-bold leadi text-center sm:text-4xl">About TourBDirect</h1>
                <div className="container flex flex-col text-lg">
                    <div className="flex flex-col divide-y  my-7  dark:divide-gray-700">
                        {/* 1 */}
                        <details>
                            <summary className="py-2 text-green-500 outline-none cursor-pointer focus:underline">Welcome to TourBDirect </summary>
                            <div className="px-4 pb-4 text-green-600">
                                <p className="text-green-500">Welcome to TourBDirect, your go-to online platform for comprehensive information and resources on popular destinations in Bangladesh. Our mission is to provide travelers with detailed insights into attractive tourist spots, travel guides, accommodations, activities, and more.</p>

                            </div>
                        </details>
                        {/* 2 */}
                        <details>
                            <summary className="py-2 text-green-500 outline-none cursor-pointer focus:underline">At TourBDirect </summary>
                            <div className="px-4 pb-4 text-green-600">
                                <p className="text-green-500"> At TourBDirect, we strive to make your travel experience seamless by offering a one-stop solution for all your travel-related queries. Whether you are planning a trip, looking for travel guides, or searching for the best accommodations, we have got you covered.</p>

                            </div>
                        </details>
                        {/* 3 */}
                        <details>
                            <summary className="py-2 text-green-500 outline-none cursor-pointer focus:underline">Explore the beauty of Bangladesh with TourBDirect </summary>
                            <div className="px-4 pb-4 text-green-600">
                                <p className="text-green-500"> Explore the beauty of Bangladesh with TourBDirect and make your journey memorable. Feel free to reach out to us for any inquiries or assistance – we are here to enhance your travel adventures!</p>

                            </div>
                        </details>
                    </div>
                </div>


                {/* Details for each anchor link */}
                <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
                    <div className="flex flex-col w-full divide-y dark:divide-gray-700">
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Billing Details
                            {/* Add relevant content for Billing */}
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Support Information
                            {/* Add relevant content for Support */}
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Account Details
                            {/* Add relevant content for Account */}
                        </a>
                    </div>

                    <div className="flex flex-col w-full divide-y dark:divide-gray-700">
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Features Overview
                            {/* Add relevant content for Features */}
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Contact Us
                            {/* Add relevant content for Contact Us */}
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            My Orders Information
                            {/* Add relevant content for My Orders */}
                        </a>
                    </div>

                    <div className="hidden w-full divide-y sm:flex-col sm:flex dark:divide-gray-700">
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Enterprise Details
                            {/* Add relevant content for Enterprise */}
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Privacy Policy
                            {/* Add relevant content for Privacy */}
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
                            Developer Resources
                            {/* Add relevant content for Developers */}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
