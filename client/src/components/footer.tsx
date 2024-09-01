import { Facebook, Instagram, Shirt, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex px-16 py-8 bg-gray-100 items-center justify-between">
            <div className="flex gap-3">
                <Shirt size={24} color="#374151" />
                <div className="font-medium text-gray-700">My Store</div>
            </div>
            <Link to={"/"} className="hover:underline text-sm">
                Products
            </Link>
            <div className="flex items-center gap-3">
                <Twitter color="#4C4C4C" />
                <Facebook color="#4C4C4C" />
                <Instagram color="#4C4C4C" />
            </div>
        </footer>
    );
};

export default Footer;
