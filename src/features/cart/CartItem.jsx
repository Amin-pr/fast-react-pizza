import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="items-center justify-between py-2 sm:flex">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type={"primary"}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
