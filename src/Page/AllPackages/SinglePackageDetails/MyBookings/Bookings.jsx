import { useEffect, useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import usePackage from '../../../../hooks/usePackage';
import useAuth from '../../../../hooks/useAuth';

const Bookings = () => {
  const { user } = useAuth();
  const book = 'mybookings';
  const [booking] = usePackage(book);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(booking);
  }, [booking]);
  console.log(user.email,booking.Email)
  // if (user.email !== booking.Email) {
  //   return;
  // }

  const handlePay = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].status = 'Accepted';
    setBookings(updatedBookings);
  };

  const handleCancel = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].status = 'Cancelled';
    setBookings(updatedBookings);
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leadi">Bookings</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-700">
              <th className="p-3">Tourist</th>
              <th className="p-3">Package</th>
              <th className="p-3">Tour Guide</th>
              <th className="p-3">Tour Date</th>
              <th className="p-3">Tour Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="border-b  border-gray-700">
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-3 ">{booking.Name}</td>
                <td className="px-3 py-2">{booking.type}</td>
                <td className="px-3 py-2">{booking.tourGuide} {booking.Email}</td>
                <td className="px-3 py-2">{booking.tourDate}</td>
                <td className="px-3 py-2">{booking.Price}</td>
                <td className="px-3 py-2">{booking.status}</td>
                <td className="px-3 py-2">
                  {booking.status !== 'In Review' && (
                    <>
                      <button
                        onClick={() => handleCancel(index)}
                        className="p-1 rounded-full text-gray-600 hover:bg-gray-700 focus:dark:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handlePay(index)}
                        disabled={booking.status !== 'In Review'}
                        className="p-1 rounded-full text-gray-600 hover:bg-gray-700 focus:bg-gray-700"
                      >
                        Pay
                      </button>
                      <button

                        className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                      >
                        Apply
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
