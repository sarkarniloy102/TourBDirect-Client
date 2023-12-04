import { Link } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import axios from "axios";

const MyWishList = () => {

    const [wishlists, setwishlists] = useState([]);
    useEffect(() => {
        axios.get('https://tour-bd-irect-server.vercel.app/mywishlist')
            .then(res => {
                setwishlists(res.data);
                console.log(res.data);
            });
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tour-bd-irect-server.vercel.app/mywishlist/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = wishlists.filter(wishlist => wishlist._id !== id);
                            setwishlists(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="px-4 grid grid-cols-3 gap-5">
                {
                    wishlists?.map((Package, idx) => <WishlistCard key={idx}
                        Package={Package}
                        handleDelete={handleDelete}
                    ></WishlistCard>)
                }

            </div>
            <div className="text-center mt-5">
                <Link to={'/allpackages'} className="text-white bg-slate-800 hover:bg-orange-600 py-2 px-4 rounded-md">
                    All Packages
                </Link>
            </div>

        </div>
    );
};

export default MyWishList;