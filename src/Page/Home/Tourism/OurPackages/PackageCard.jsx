
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const PackageCard = ({ Package }) => {
  const { _id, type, img, title, price, } = Package;
  console.log(type, title);

  const handleWishlist = () => {
    axios.post('https://tour-bd-irect-server.vercel.app/mywishlist', Package, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        const data = res.data;
        console.log(res.data)
        // reset();
        if (data.insertedId) {
          toast('🦄Package added in wishlist!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
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
      .catch(error => console.log(error))
  }


  return (

    <div className="bg-slate-800 shadow-md rounded-md overflow-hidden p-4">
      <div className="relative">
        <img src={img} alt="Spot" className="w-full h-56 object-cover  border  shadow-md rounded-md" />
        <button onClick={handleWishlist} className="absolute top-2 right-2 text-red-500 hover:text-red-600">
          <FaHeart />

        </button>
      </div>
      <div className="pt-4">
        <p className="">{type}</p>
        <h3 className="text-lg font-semibold mt-1 mb-2">{title}</h3>
        <p className=" mb-2">Price: {price}tk</p>
        {
          <Link to={`/PackageDetails/${_id}`}
            className="w-full btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            View Package
          </Link>

        }
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default PackageCard;