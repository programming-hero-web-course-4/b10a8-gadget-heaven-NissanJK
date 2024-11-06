import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Rating from "react-rating-stars-component";
import { useShopping } from "../../context/ShoppingContext";
import { Helmet } from "react-helmet-async";
const GadgetDetails = () => {
    const { product_id } = useParams();
    const [gadget, setGadget] = useState(null);
    const { addToCart, addToWishlist, wishlist } = useShopping();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/gadgetsData.json')
            .then(res => res.json())
            .then(data => {
                const selectedGadget = data.find(item => item.product_id === product_id);
                setGadget(selectedGadget);
            })
            .catch(error => console.error("Error fetching gadget details:", error));
    }, [product_id]);

    if (!gadget) {
        return <p className="text-center text-lg">Loading...</p>;
    }

    const isInWishlist = wishlist.some((item) => item.product_id === gadget.product_id);

    return (
        <div className="min-h-screen bg-gray-100 pb-16 relative">
            <Helmet>
                <title>GadgetHaven | {gadget.product_title} Details</title>
            </Helmet>
            <div className="text-center mb-8 bg-purple-700 pt-10 pb-60">
                <h1 className="text-3xl font-extrabold text-purple-200 w-11/12 mx-auto">Product Details</h1>
                <p className="text-purple-300 w-10/12 mx-auto">
                    Explore all the key details of your chosen product, from features and specifications to high-quality images and customer reviews. With pricing, availability, and related products at your fingertips, making an informed purchase has never been easier.</p>
            </div>

            <div className="w-11/12 lg:w-8/12 mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row lg:absolute bottom-10 lg:left-[17%]">
                <div className="md:w-1/2 p-4 flex flex-col">
                    <button onClick={() => navigate(-1)} className="mb-5 w-fit btn btn-outline text-xl text-purple-700 font-black rounded-xl">Back</button>
                    <div className=" lg:flex justify-center items-center">
                        <div className="bg-gray-200 rounded-lg w-full h-80 flex justify-center items-center">
                            <img
                                src={gadget.product_image}
                                alt={gadget.product_title}
                                className="object-cover h-full w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-2">{gadget.product_title}</h2>
                    <p className="text-2xl text-purple-700 font-semibold mb-4">Price: ${gadget.price}</p>
                    <div className="mb-4">
                        <span className={`px-4 py-2 rounded-full text-white ${gadget.availability ? 'bg-green-600' : 'bg-red-600'}`}>
                            {gadget.availability ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    <p className="text-gray-700 mb-4">{gadget.description}</p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">Specification:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {gadget.specifications.map((spec, index) => (
                            <li key={index} className="text-gray-600">{spec}</li>
                        ))}
                    </ul>
                    <div className="flex items-center mt-4">
                        <h3 className="text-xl font-semibold">Rating</h3>
                        <div className="flex items-center ml-2">
                            <span className="flex text-yellow-400 text-xl"><Rating
                                count={5}
                                value={gadget.rating}
                                size={24}
                                activeColor="#ffd700"
                                isHalf={true}
                                edit={false}
                            ></Rating>
                                <span className="ml-3">{gadget.rating.toFixed(1)}</span></span>
                        </div>
                    </div>
                    <div className="flex items-center mt-6 space-x-4">
                        <button onClick={() => addToCart(gadget)} className="flex items-center bg-purple-700 text-white px-6 py-2 rounded-full font-semibold">
                            <FaShoppingCart className="mr-2"></FaShoppingCart> Add To Cart
                        </button>
                        <button onClick={() => addToWishlist(gadget)} className="flex items-center text-gray-600 bg-gray-200 p-3 rounded-full" disabled={isInWishlist}>
                            <FaHeart className=" text-red-500"></FaHeart>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
