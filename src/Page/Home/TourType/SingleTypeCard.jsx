

const SingleTypeCard = ({ travelPlace }) => {

    return (
        <div>
           

            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  text-gray-100">
                <img src={travelPlace.img} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{travelPlace.type}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">{travelPlace.title}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleTypeCard;