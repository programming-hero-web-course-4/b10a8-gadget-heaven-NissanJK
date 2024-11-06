import bannerImg from '../../../public/assets/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='text-center w-11/12 mx-auto pt-8 bg-purple-700 rounded-b-3xl pb-52 relative'>
            <div className=''>
                <h1 className='text-3xl lg:text-5xl w-11/12 lg:w-8/12 mx-auto font-black text-purple-200'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='w-10/12 lg:w-6/12 mx-auto text-purple-300 my-5'>Welcome to GadgetHaven, where the latest and most innovative gadgets await you! Browse featured collections, discover exclusive deals, and find everything you need in one place, all while enjoying a seamless and exciting shopping experience.</p>
                <Link to="dashboard" className='btn text-xl text-purple-700 font-black rounded-3xl'>Shop Now</Link>
            </div>
            <div className='w-full md:w-6/12 mx-auto border p-5 rounded-3xl absolute -bottom-1/4 md:-bottom-1/3 md:left-1/4'>
                <img src={bannerImg} alt="" className='w-full mx-auto object-cover rounded-3xl h-72' />
            </div>
        </div>
    );
};

export default Banner;