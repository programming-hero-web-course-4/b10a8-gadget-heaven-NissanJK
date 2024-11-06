import { Helmet } from 'react-helmet-async';
const Statistics = () => {
    return (
        <div className="text-center bg-purple-700 text-purple-200 py-10 w-full">
            <Helmet>
                <title>GadgetHaven | Statistics</title>
            </Helmet>
            <h1 className='font-black text-3xl w-11/12 mx-auto mb-4'>Statistics</h1>
            <p className='w-10/12 mx-auto'>Stay ahead of the curve with our curated selection of innovative tech products. Whether you’re looking for powerful smartphones, sleek laptops, or smart home solutions, our gadgets are designed to enhance every aspect of your daily life. Dive into a world of convenience, performance, and style as we bring you the latest trends in technology, ensuring you always have the tools to stay connected, productive, and entertained.</p>
        </div>
    );
};

export default Statistics;