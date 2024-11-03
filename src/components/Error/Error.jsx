import { Helmet } from 'react-helmet-async';
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
            </div>
        </div>
    );
};

export default Error;