import { createContext, useContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShoppingContext = createContext();

export const useShopping = () => useContext(ShoppingContext);

export const ShoppingProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    });
    const [wishlist, setWishlist] = useState(() => {
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [cart, wishlist]);

    const addToCart = (item) => {
        if (!item.availability) {
            toast.error(`${item.product_title} is out of stock!`);
            return;
        }
        const itemExists = cart.find(cartItem => cartItem.product_id === item.product_id);

        if (itemExists) {
            toast.info(`${item.product_title} is already in your cart!`);
        } else {
            setCart((prevCart) => [...prevCart, item]);
            toast.success(`${item.product_title} added to cart!`);
        }
    };

    const addToWishlist = (item) => {
        if (!wishlist.find(wishItem => wishItem.product_id === item.product_id)) {
            setWishlist((prevWishlist) => [...prevWishlist, item]);
            toast.success(`${item.product_title} added to wishlist!`);
        } else {
            toast.info(`${item.product_title} is already in wishlist!`);
        }
    };

    return (
        <ShoppingContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, setCart }}>
            <ToastContainer />
            {children}
        </ShoppingContext.Provider>
    );
};
