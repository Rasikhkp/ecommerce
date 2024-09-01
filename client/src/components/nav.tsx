import { Search, Shirt, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Nav = () => {
    return (
        <nav className="fixed flex justify-between w-full px-16 py-3 items-center bg-white/90 backdrop-blur">
            <div className="flex gap-5">
                <Shirt size={32} />
                <div className="text-xl font-medium">My Store</div>
            </div>
            <div className="w-[500px] relative">
                <Search
                    className="absolute top-[10px] left-3"
                    color="grey"
                    size={16}
                />
                <Input
                    className="pl-10"
                    type="text"
                    placeholder="Search products..."
                />
            </div>
            <div className="flex gap-7 items-center">
                <ShoppingCart />
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
};

export default Nav;
