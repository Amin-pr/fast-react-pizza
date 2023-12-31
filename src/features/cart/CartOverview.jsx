import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="ite flex justify-between bg-stone-800 p-4 text-stone-200  sm:px-6 ">
      <p className="space-x-2 font-semibold uppercase  text-stone-300 sm:space-x-6  ">
        <span className="">23 pizzas</span>
        <span> $23.45</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
