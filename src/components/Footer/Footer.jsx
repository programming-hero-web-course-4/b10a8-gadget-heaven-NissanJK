const Footer = () => {
    return (
        <footer className=" bg-white text-black mt-60">
            <div className="text-center pt-6 w-11/12 mx-auto">
                <h1 className="font-black text-3xl mb-3">Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider h-2 w-11/12 mx-auto"></div>
            <div className="md:flex justify-around w-9/12 mx-auto py-6">
                <nav className="flex flex-col mb-5 md:mb-0">
                    <h6 className="footer-title font-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col mb-5 md:mb-0">
                    <h6 className="footer-title font-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col mb-5 md:mb-0">
                    <h6 className="footer-title font-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;