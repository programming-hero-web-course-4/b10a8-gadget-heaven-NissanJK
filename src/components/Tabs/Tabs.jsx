const Tabs = ({ activeTab, onSelectTab }) => {
    return (
        <div className="flex justify-center space-x-4 mb-8">
            <button
                onClick={() => onSelectTab("cart")}
                className={`btn rounded-xl ${activeTab === "cart" ? "bg-gray-300 text-purple-700 font-bold" : "btn-outline text-purple-200"}`}
            >
                Cart
            </button>
            <button
                onClick={() => onSelectTab("wishlist")}
                className={`btn rounded-xl ${activeTab === "wishlist" ? "bg-gray-300 text-purple-700 font-bold" : "btn-outline text-purple-200"}`}
            >
                Wishlist
            </button>
        </div>
    );
};

export default Tabs;
