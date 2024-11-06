import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useShopping } from '../../context/ShoppingContext';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import Tabs from '../Tabs/Tabs';
import PurchaseModal from '../PurchaseModal/PurchaseModal';

const Dashboard = () => {
    const { cart, wishlist, setCart } = useShopping();
    const [activeTab, setActiveTab] = useState("cart");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchaseTotal, setPurchaseTotal] = useState(0);
    const navigate = useNavigate();

    const toggleTab = (tab) => setActiveTab(tab);

    const calculateTotalPrice = () => cart.reduce((total, item) => total + item.price, 0);

    const handlePurchase = () => {
        setPurchaseTotal(calculateTotalPrice());
        setIsModalOpen(true);
        setCart([]);
        localStorage.removeItem('cart');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    return (
        <div className="">
            <Helmet>
                <title>GadgetHaven | Dashboard</title>
            </Helmet>
            <div className='bg-purple-700 py-10'>
                <h1 className="text-3xl font-bold text-center mb-4 text-purple-100 w-11/12 mx-auto">Dashboard</h1>
                <p className="text-center text-purple-300 mb-8 w-10/12 mx-auto">
                    Welcome to your personalized dashboard, where managing your favorite gadgets has never been easier. From viewing your cart to exploring your wishlist, this hub provides a seamless experience for keeping track of your chosen tech products. Easily sort items, review costs, and make purchases, all in one place. Dive into the world of technology with just a few clicks and enjoy a streamlined shopping experience tailored just for you!
                </p>

                <Tabs activeTab={activeTab} onSelectTab={toggleTab}></Tabs>
            </div>
            <div className='w-11/12 mx-auto my-10'>
                {activeTab === "cart" ? (
                    <Cart
                        cartItems={cart}
                        onSortByPrice={() => setCart([...cart])}
                        totalPrice={calculateTotalPrice()}
                        onPurchase={handlePurchase}
                    ></Cart>
                ) : (
                    <Wishlist wishlistItems={wishlist}></Wishlist>
                )}

                {isModalOpen && <PurchaseModal onClose={closeModal} totalAmount={purchaseTotal}></PurchaseModal>}
            </div>
        </div>
    );
};

export default Dashboard;
