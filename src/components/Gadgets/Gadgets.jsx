import { useEffect, useState } from "react";
import GadgetCard from "../GadgetCard/Gadgetcard";


const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch('/gadgetsData.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data);
            })
            .catch(error => console.error("Error fetching gadgets data:", error));
    }, []);

    const categories = ["All", "Computers", "Phones", "Smart Watches", "Chargers", "Power Banks"];


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredGadgets(gadgets);
        } else {
            const categoryGadgets = gadgets.filter(gadget => gadget.category === category);
            setFilteredGadgets(categoryGadgets);
        }
    };

    return (
        <div className="w-11/12 mx-auto mt-60">
            <h1 className="font-black text-center text-4xl mb-20">Explore Cutting-Edge Gadgets</h1>

            <div className="md:flex">
                <aside className="md:w-1/4 mr-4 bg-gray-100 p-4 rounded-lg shadow-md">
                    <ul className="menu bg-base-100 rounded-box">
                        {categories.map((category, index) => (
                            <li key={index} className={selectedCategory === category ? "active bg-purple-300 text-white rounded-xl" : ""}>
                                <button onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <GadgetCard key={gadget.product_id} gadget={gadget} ></GadgetCard>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-4xl text-purple-700 my-auto font-black">No gadgets available of this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
