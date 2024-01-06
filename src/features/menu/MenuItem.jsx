import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 rounded-sm p-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 ${soldOut ? "opacity-70   grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium capitalize mb-1">{name}</p>
        <p className="text-sm italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex flex-row items-center justify-between ">
          {!soldOut ? (
            <p className="text-sm ">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
          <Button type={"small"}>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
