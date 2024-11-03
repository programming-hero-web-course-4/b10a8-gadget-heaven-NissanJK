import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div className="text-center font-black text-4xl m-10">
            <Helmet>
                <title>GadgetHaven | Home</title>
            </Helmet>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;