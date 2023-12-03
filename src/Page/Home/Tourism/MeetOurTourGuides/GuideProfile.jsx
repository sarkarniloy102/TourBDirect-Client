
import { useLoaderData } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter, FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const GuideProfile = () => {
    const tourGuide = useLoaderData();
    const { name, img, email, phone, experience, designation } = tourGuide;
    return (
        <div>
            <h2>{tourGuide.length}</h2>
            <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 justify-center items-center">
                    <div className="text-center space-y-2 mb-5">
                        <img src={img} alt="" className="w-48 h-44 rounded-full self-center flex-shrink-0 md:justify-self-start" />
                        <p className="text-3xl">{name}</p>
                        <p className="text-md"> {designation}</p>

                    </div>

                    <div className="flex flex-col text-center w-3/4">
                        <p className="dark:text-gray-400">{experience}</p>
                    </div>
                </div>

                {/* contact */}
                <section className="py-6 mt-10 ">
                    <div className=" grid max-w-6xl grid-cols-1  p-6 mx-auto lg:px-8 lg:grid-cols-2 md:divide-x items-center  ">
                        <div className="py-6 md:py-0 md:pl-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center gap-6">
                                    <FaLocationArrow></FaLocationArrow>
                                    <span>Fake address, 9999 City</span>
                                </p>
                                <p className="flex items-center gap-6">
                                    <FaPhone className="text-lg" />
                                    <span>{phone}</span>
                                </p>
                                <p className="flex items-center gap-6">
                                    <MdEmail className="text-xl" />
                                    <span>{email}</span>
                                </p>
                            </div>
                        </div>
                        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" placeholder="Enter your name" className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" placeholder="enter your mail" className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
                            </label>
                            <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
                        </form>
                    </div>
                </section>
                {/*  */}
                <div className="flex justify-center pt-4 space-x-4 align-center">
                    <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                        <FaGithub />

                    </a>
                    <a rel="noopener noreferrer" href="#" aria-label="Facebook" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                        <FaFacebook />

                    </a>
                    <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                        <FaTwitter />

                    </a>

                </div>
            </div>
        </div>
    );
};

export default GuideProfile;