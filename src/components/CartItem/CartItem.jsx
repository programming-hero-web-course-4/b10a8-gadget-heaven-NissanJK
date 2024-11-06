const CartItem = ({ item }) => {
    return (
        <div className="border p-4 rounded shadow flex items-center justify-between">
            <div className="flex items-center">
                <img src={item.product_image} alt={item.product_title} className="h-16 w-16 object-cover rounded mr-4" />
                <div>
                    <h3 className="text-lg font-bold">{item.product_title}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
