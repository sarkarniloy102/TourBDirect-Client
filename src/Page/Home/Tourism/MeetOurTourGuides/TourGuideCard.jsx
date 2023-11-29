import { AiTwotoneMail } from "react-icons/ai";
import { MdAddCall } from "react-icons/md";



const TourGuideCard = ({ tourGuide }) => {
    const { name, img, email, experience, phone, designation } = tourGuide;
    return (
        <div className="p-8 space-y-5">
            <div className=" sm:flex  sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={img} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col  space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <span className="text-sm dark:text-gray-400">{designation}</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <AiTwotoneMail className="text-2xl" />
                            <span className="dark:text-gray-400">{email}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <MdAddCall className="text-2xl" />
                            <span className="dark:text-gray-400">{phone}</span>
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <p>{experience}</p>
            </div>
        </div>

    );
};

export default TourGuideCard;