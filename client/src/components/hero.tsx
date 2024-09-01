import { Button } from "./ui/button";
import clothesImg from "@/assets/clothes.jpg";

const Hero = () => {
    return (
        <div className="h-[100vh] w-full grid grid-cols-2 gap-32 justify-center px-16">
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold mb-5">
                    Introducing the Acme Prism Tee
                </h1>
                <p className="text-md text-gray-500 mb-5">
                    Elevate your style with our latest collection of premium
                    t-shirts, crafted with the finest materials for unparalleled
                    comfort and durability.
                </p>
                <Button className="w-28">Shop now</Button>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src={clothesImg}
                    alt="clothes"
                    className="w-[530px] h-[500px] object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
