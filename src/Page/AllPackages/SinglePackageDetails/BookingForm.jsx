import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import usePackage from '../../../hooks/usePackage';
import Swal from 'sweetalert2'
import axios from 'axios';
const BookingForm = () => {
    const tourguide = 'tourguides'
    const [tourGuides] = usePackage(tourguide);

    const travelplace = 'allplace';
    const [travelPlaces] = usePackage(travelplace);

    const [tourDate, setTourDate] = useState(null);
    const [tourGuide, setTourGuide] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [touristDetails, setTouristDetails] = useState({
        Name: '',
        Email: '',
        Image: '',
        Price: '',
        tourDate: null,
        tourGuide: '',
        type: '',
        title: ''
    });

    const handleDateChange = date => {
        setTourDate(date);
        setTouristDetails(prevState => ({
            ...prevState,
            tourDate: date,
        }));
    };

    const handleTourGuideChange = event => {
        setTourGuide(event.target.value);
        setTouristDetails(prevState => ({
            ...prevState,
            tourGuide: event.target.value,
        }));
    };
    // change category
    const handleTypeChange = e => {
        setType(e.target.value);
        setTouristDetails(prevState => ({
            ...prevState,
            type: e.target.value,
        }));
    }
    // change place
    const handleTitleChange = e => {
        setTitle(e.target.value);
        setTouristDetails(prevState => ({
            ...prevState,
            title: e.target.value,
        }));
    }

    // tourist Input details
    const handleInputChange = event => {
        const { name, value } = event.target;
        setTouristDetails({ ...touristDetails, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Handle form submission, e.g., submit data to backend or perform necessary actions
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm your Booking"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:5000/mybookings', touristDetails, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => {
                        const data = res.data;
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Booked!",
                                text: "Your book has been confirmed.",
                                icon: "success"
                            });
                        }
                        else {
                            // Handle other scenarios or display an error message
                            console.error('Failed to add service:', data.error);
                            Swal.fire({
                                title: 'Error!',
                                text: 'Failed to add service',
                                icon: 'error',
                                confirmButtonText: 'OK',
                            });
                        }
                    })
                    .catch(error => { console.log(error.message) })

            }
        });
        // console.log('Submitted Data:', { tourDate, tourGuide, touristDetails });
    };
    //  distince category from allplace
    const uniqueTypes = new Set();
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
                        <div className='flex flex-col lg:flex-row gap-5'>
                            {/* category type */}
                            <div className="mb-4 w-1/2">
                                <label className="block mb-2">Tour Category</label>
                                <select value={type} onChange={handleTypeChange} className="border border-gray-300 rounded-md p-2 w-full">
                                    <option value="">Select Tour Category</option>
                                    {/* Populate dropdown options with tour guide names */}

                                    {

                                        travelPlaces.map((travelPlace, idx) => {
                                            if (!uniqueTypes.has(travelPlace.type)) {
                                                uniqueTypes.add(travelPlace.type);
                                                return (
                                                    <option key={idx} value={travelPlace.type}>
                                                        {travelPlace.type}
                                                    </option>
                                                );
                                            }
                                            return null; // Skip rendering for duplicate types
                                        })
                                    }

                                </select>
                            </div>
                            {/* category title */}
                            <div className="mb-4">
                                <label className="block mb-2">Tour Place</label>
                                <select value={title} onChange={handleTitleChange} className="border border-gray-300 rounded-md p-2 w-full">
                                    <option value="">Select Tour Place</option>
                                    {/* Populate dropdown options with tour guide names */}
                                    {
                                        travelPlaces.map((travelPlace, idx) => (
                                            <option key={idx} value={travelPlace.title}>{travelPlace.title}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </div>

                        {/* tour guide */}
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
