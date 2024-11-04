import { useNavigate } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/gadgets/${gadget.product_id}`);
    };
    return (
        <div className="card bg-white shadow-md rounded-lg p-4">
            <img
                src={gadget.product_image}
                alt={gadget.product_title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{gadget.product_title}</h3>
            <p className="text-gray-500">${gadget.price}</p>
            <div className="mt-4">
                <button
                    onClick={handleDetailsClick}
                    className="btn btn-outline text-purple-700 font-black rounded-3xl"
                >
                    Show Details
                </button>
            </div>
        </div>
    );
};

export default GadgetCard;
