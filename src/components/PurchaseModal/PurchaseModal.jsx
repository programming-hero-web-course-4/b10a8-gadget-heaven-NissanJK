import modalImg from "../../../public/assets/Group.png"
const PurchaseModal = ({ onClose, totalAmount }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal-box bg-white rounded-lg p-8 w-11/12 max-w-sm text-center shadow-lg">
                <div className="flex justify-center mb-4">
                    <div className="rounded-full">
                        <img src={modalImg} alt="" className="size-14" />
                    </div>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Payment Successfully</h3>
                <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
                <p className="text-lg font-semibold text-gray-800">Total: ${totalAmount.toFixed(2)}</p>
                <div className="modal-action mt-6">
                    <button onClick={onClose} className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg focus:outline-none hover:bg-gray-300">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;
