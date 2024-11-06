import WishlistItem from '../WishlistItem/WishlistItem';

const Wishlist = ({ wishlistItems }) => {
    return (
        <div>
            <h2 className="text-2xl font-black mb-4">Wishlist</h2>
            <div className="grid gap-4 grid-cols-1">
                {wishlistItems.map((item) => (
                    <WishlistItem key={item.product_id} item={item}></WishlistItem>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
