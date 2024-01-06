import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";

function Header() {
  return (
    <header className="flex items-center justify-between  border-b-4 border-stone-500 bg-yellow-500 px-6 py-4  uppercase ">
      <Link to={"/"} className="px-6 font-bold">
        Fast React Pizza Co.
      </Link>
      <Username />
      <SearchOrder />
    </header>
  );
}

export default Header;
