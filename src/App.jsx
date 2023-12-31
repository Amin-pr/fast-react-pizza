import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
//need to impliment routes this way for data fetching
const router = createBrowserRouter([
  {
    //Layout route
    element: <AppLayout />,
    //we can use error here to replace whole app
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,

      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        //or we can use error here to replace only this component
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
        errorElement: <Error />,
      },
      {
        path: "/order/ordeId",
        element: <Order />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
