import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <div className="text-center font-black text-4xl m-10">
                <Helmet>
                    <title>GadgetHaven | Page Not Found</title>
                </Helmet>
                <h1>Oops!</h1>
                <p className="py-5">Sorry, an unexpected error has occurred.</p>
                <p>404 - Page Not Found</p>
                <Link to="/" className="btn text-2xl btn-outline text-purple-700 font-black rounded-3xl my-5">Return to Home</Link>
            </div>
        </div>
    );
};

export default Error;