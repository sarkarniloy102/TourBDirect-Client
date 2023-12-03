
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ Package }) => {
  const {_id, type, img, title, price, } = Package;
  console.log(type, title);
  

  return (

    <div className="bg-slate-800 shadow-md rounded-md overflow-hidden p-4">
      <div className="relative">
        <img src={img} alt="Spot" className="w-full h-56 object-cover  border  shadow-md rounded-md" />
        <button className="absolute top-2 right-2 text-red-500 hover:text-red-600">
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

      </div>
    </div>
  );
};

export default PackageCard;