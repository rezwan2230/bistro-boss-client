
const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item
    return (
        <div className="flex space-x-5">
            <img className="w-[90px] h-[90px] rounded-b-full rounded-r-full" src={image} alt="" />
            <div className="">
                <h3 className="text-xl uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <h3 className="text-yellow-600 text-lg pr-5 font-semibold">${price}</h3>
            </div>
        </div>
    );
};

export default MenuItem;