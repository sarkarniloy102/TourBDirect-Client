
import { Link } from 'react-router-dom';
const WishlistCard = ({ Package, handleDelete }) => {
    const { _id, type, img, title, price, } = Package;

    return (
        <div className="bg-slate-800 shadow-md rounded-md overflow-hidden p-4">
            <div className="relative">
                <img src={img} alt="Spot" className="w-full h-56 object-cover  border  shadow-md rounded-md" />

            </div>
            <div className="pt-4">
                <p className="">{type}</p>
                <h3 className="text-lg font-semibold mt-1 mb-2">{title}</h3>
                <p className=" mb-2">Price: {price}tk</p>
                {
                    <div className='flex gap-3 p-3'>
                        <Link onClick={() => handleDelete(_id)} className="w-1/2 btn bg-blue-500 hover:bg-red-500 text-white py-2 px-4 rounded-md">
                            Delete
                        </Link>
                        <Link to={`/PackageDetails/${_id}`}
                            className="w-1/2 btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                            View Package
                        </Link>
                    </div>



                }

            </div>
        </div>
    );
};

export default WishlistCard;