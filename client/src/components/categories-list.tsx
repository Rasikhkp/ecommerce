type CategoryType = {
    name: string;
    img: string;
};

const CategoriesList = ({
    categoriesData,
}: {
    categoriesData: CategoryType[];
}) => {
    return (
        <>
            <h1 className="text-xl font-semibold ml-16 text-gray-700 mt-10 mb-5">
                Categories
            </h1>

            <div className="px-16 grid grid-cols-5 gap-5">
                {categoriesData.map((c, i) => (
                    <button
                        key={i}
                        className="p-2 rounded border border-gray-200 hover:scale-[1.01] transition-all"
                    >
                        <img
                            src={c.img}
                            className="size-40 mx-auto object-cover"
                        />
                        <p className="text-sm text-gray-500 text-center mt-3">
                            {c.name}
                        </p>
                    </button>
                ))}
            </div>
        </>
    );
};

export default CategoriesList;
