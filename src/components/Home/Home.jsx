import { Helmet } from 'react-helmet-async';
import Gadgets from '../Gadgets/Gadgets';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>GadgetHaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;