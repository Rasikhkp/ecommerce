import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type ProductType = {
    name: string;
    img: string;
    price: number;
};

const FeaturedProducts = ({ products }: { products: ProductType[] }) => {
    return (
        <div className="w-full px-16 text-gray-700 mb-40">
            <div className="flex justify-between items-center mt-40 mb-5">
                <h1 className="text-xl font-semibold">Featured Products</h1>
                <Link to={"/products"} className="text-sm hover:underline">
                    View all
                </Link>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {products.map((p, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 overflow-hidden rounded"
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="object-contain w-full h-52"
                        />
                        <div className="p-5">
                            <h2 className="text-lg font-semibold mb-2">
                                {p.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-3">
                                Rp{p.price}
                            </p>
                            <Button>Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
