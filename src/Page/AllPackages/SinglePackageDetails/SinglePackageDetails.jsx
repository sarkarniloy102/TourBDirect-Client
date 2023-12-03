import { useLoaderData } from "react-router-dom";


const SinglePackageDetails = () => {
    const PackageDetails = useLoaderData();
    console.log(PackageDetails);
    const { type, img, title, price, details, tourPlan } = PackageDetails;
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-12">
                    <div className="flex items-center  justify-center p-6 mt-8  h-72 sm:h-80 lg:h-96 ">
                        <img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 border shadow-2xl rounded-md" />
                    </div>
                    <div className="flex flex-col justify-center pr-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl text-green-500 font-bold leadi ">{type}
                            <br /> <span className="text-xl text-green-600">{title}</span>
                        </h1>
                        <p className="mt-6 mb-3 text-lg text-green-700 ">{details}
                        </p>
                        {/* tour plan */}

                        <div className="container flex flex-col text-lg">
                            <div className="flex flex-col divide-y  dark:divide-gray-700">
                                <details>
                                    <summary className="py-2 text-green-500 outline-none cursor-pointer focus:underline">Explore Your Next Adventure with Our Tour Plans </summary>
                                    <div className="px-4 pb-4 text-green-600">
                                        <p className="text-green-500">Number of Day : {tourPlan.days}</p>
                                        <p>{tourPlan.details}</p>
                                    </div>
                                </details>

                            </div>
                        </div>

                        {/*  */}
                        <p className="mb-8 text-green-500 text-xl"> <span className=" text-green-700 ">Price :</span> BDT-{price} [1:1]</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-green-600 hover:bg-orange-500 dark:text-gray-900">Book Now</a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SinglePackageDetails;