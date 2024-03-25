import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PageToRead from "../Pages/PageToRead";
import DetailsBookCards from "../Pages/DetailsBookCards";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagetoread",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/detailsBookCards/:bookId",
        element: <DetailsBookCards></DetailsBookCards>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
