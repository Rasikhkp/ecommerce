import CategoriesList from "@/components/categories-list";
import FeaturedProducts from "@/components/featured-products";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

const categories = [
    {
        name: "T-Shirt",
        img: "https://dynamic.zacdn.com/_9Mh3Ml5G5qNJMt45DQ7f4Fk25o=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/ootdsupply-9377-7657154-3.jpg",
    },
    {
        name: "Shirt",
        img: "https://dictionary.cambridge.org/images/thumb/shirt_noun_002_33400.jpg?version=6.0.31",
    },
    {
        name: "Pants",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtYIOe40tDXZt3W_oQ7tHca81n3w98UHsbg&s",
    },
    {
        name: "Outwear",
        img: "https://www.vondutch.co.id/2907-thickbox_default/vondutch-sweater-outwear-jacket-0883-my.jpg",
    },
    {
        name: "shoes",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377758/01/sv01/fnd/IDN/fmt/png/ForeverRun-NITRO%E2%84%A2-Women's-Running-Shoes",
    },
];

const products = [
    {
        img: "https://tangoofficial.com/cdn/shop/products/Adobe_Express_20221118_0155500_1.png?v=1668718639",
        name: "Men's Leather Jacket",
        price: 850000,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnN3MFm-nWQju6MERwd8Nqf_EUX64vSQfV5w&s",
        name: "Women's Flannel Shirt",
        price: 250000,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPxPy358Wu_sXwl6cXZEZys4ito_H0NqtzQ&s",
        name: "Men's Jeans",
        price: 350000,
    },
    {
        img: "https://s3.bukalapak.com/img/30730029103/s-463-463/fa3ed8d5_dbc2_4d80_a48f_8ab3cac14e15.jpg.webp",
        name: "Summer Dress",
        price: 400000,
    },
];

const Home = () => {
    return (
        <div className="font-['Poppins']">
            <Nav />
            <Hero />
            <CategoriesList categoriesData={categories} />
            <FeaturedProducts products={products} />
            <Footer />
        </div>
    );
};

export default Home;
