import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    return (
        <div className="text-center font-black text-4xl m-10">
            <Helmet>
                <title>GadgetHaven | Dashboard</title>
            </Helmet>
            <h1>This is Dashboard</h1>
        </div>
    );
};

export default Dashboard;