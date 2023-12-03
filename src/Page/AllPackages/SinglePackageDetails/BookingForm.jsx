import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import usePackage from '../../../hooks/usePackage';

const BookingForm = () => {
    const tourguide = 'tourguides'
    const [tourGuides] = usePackage(tourguide);

    const [tourDate, setTourDate] = useState(null);
    const [tourGuide, setTourGuide] = useState('');
    const [touristDetails, setTouristDetails] = useState({
        Name: '',
        Email: '',
        Image: '',
        Price: ''
    });

    const handleDateChange = date => {
        setTourDate(date);
    };

    const handleTourGuideChange = event => {
        setTourGuide(event.target.value);
    };

    // tourist Input details
    const handleInputChange = event => {
        const { name, value } = event.target;
        setTouristDetails({ ...touristDetails, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Handle form submission, e.g., submit data to backend or perform necessary actions
        console.log('Submitted Data:', { tourDate, tourGuide, touristDetails });
    };

    return (

        <div className='bg-white p-6'>
            <h2 className="text-3xl font-bold mb-4 text-center">Booking Form</h2>
            <div className="flex flex-col  gap-16  items-center lg:flex-row py-8">
                <div className='w-3/4'>
                    <img src="https://i.ibb.co/yhYpSxb/bookform.jpg" alt="" />
                </div>
                <div className="container mx-auto">

                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        {/*tourist name */}
                        <div className="mb-4">
                            <label className="block mb-2">Name of the tourist</label>
                            <input type="text" name="Name" value={touristDetails.Name} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full" />
                        </div>
                        {/* tourist email */}
                        <div className="mb-4">
                            <label className="block mb-2">Email of the tourist</label>
                            <input type="email" name="Email" value={touristDetails.Email} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full" />
                        </div>
                        {/* tourist image */}
                        <div className="mb-4">
                            <label className="block mb-2">Image of the tourist</label>
                            <input type="text" name="Image" value={touristDetails.Image} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full" />
                        </div>
                        {/* Add similar input fields for other details */}
                        <div className="mb-4 flex flex-col lg:flex-row">
                            <div className='w-1/2'>
                                <label className="block mb-2">Tour Date</label>
                                <DatePicker selected={tourDate} onChange={handleDateChange} className="border border-gray-300 rounded-md p-2 " />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Price of the tour(BDT)</label>
                                <input type="number" name="Price" value={touristDetails.Price} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full" />
                            </div>

                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Tour Guide Name</label>
                            <select value={tourGuide} onChange={handleTourGuideChange} className="border border-gray-300 rounded-md p-2 w-full">
                                <option value="">Select Tour Guide</option>
                                {/* Populate dropdown options with tour guide names */}
                                {
                                    tourGuides.map((tourGuide, idx) => (
                                        <option key={idx} value={tourGuide.name}>{tourGuide.name}</option>
                                    ))
                                }

                            </select>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full text-white py-2 px-4 rounded-md">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookingForm;
