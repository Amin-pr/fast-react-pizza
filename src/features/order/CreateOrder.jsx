/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const isSubmiting = useNavigation().state === "submitting";
  //the data that is returned from action of component
  const formErrors = useActionData();

  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 text-xl font-semibold">Ready to order? Let's go!</h2>
      {/* for working actions with react router it must be Form*/}
      {/* we can define where the form must be submited but react find the closest route */}
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" action="/order/new">
        <div className=" mb-4 flex flex-col gap-2 transition-all duration-500 sm:flex-row sm:items-center">
          <label htmlFor="custom" className="sm:basis-40">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            id="custom"
            required
            className="input grow"
          />
        </div>

        <div className=" mb-4 flex flex-col gap-2 transition-all duration-500 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="ml-2 mt-2 bg-red-100 text-xs text-red-600 rounded-md p-2">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className=" mb-4 flex flex-col gap-2 transition-all duration-500 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-3 sm:gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}

            className="h-6 w-6 accent-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 "
          />
          <label htmlFor="priority" className="p-1 font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button disabled={isSubmiting} type={"primary"}>
            {isSubmiting ? "Placing your order" : "Order Now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "please enter a valid phone me might need to contact you";

  if (Object.keys(errors).length > 0) return errors;

  //if everything is ok,createnew order
  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
