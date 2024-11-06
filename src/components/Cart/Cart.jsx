import { useState } from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cartItems, onSortByPrice, totalPrice, onPurchase }) => {
    const [sortedCart, setSortedCart] = useState([...cartItems]);

    const handleSortByPrice = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
        onSortByPrice(sorted);
    };

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2 className="text-2xl font-black mb-4">Cart</h2>
                <div className="flex items-center mb-4 gap-6">
                    <span className="text-2xl font-black">Total cost: ${totalPrice.toFixed(2)}</span>
                    <button onClick={handleSortByPrice} className="btn btn-outline text-purple-700 rounded-full">
                        Sort by Price
                    </button>
                    <button
                        onClick={onPurchase}
                        className="btn bg-purple-700 text-white rounded-full font-semibold"
                        disabled={cartItems.length === 0 || !cartItems.every(item => item.availability)}
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-1">
                {sortedCart.map((item) => (
                    <CartItem key={item.product_id} item={item}></CartItem>
                ))}
            </div>
        </div>
    );
};

export default Cart;
