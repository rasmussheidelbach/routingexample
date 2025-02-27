import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import FirstPage from "./views/FirstPage";
import SecondPage from "./views/SecondPage";
import NotFound from "./views/NotFound";
import "./App.css";
import DefaultPage from "./views/DefaultPage";
import DetailPage from "./views/DetailPage";
import ThirdPage from "./views/ThirdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "/first",
        element: <FirstPage />,
      },
      {
        path: "/second",
        element: <SecondPage />,
      },
      {
        path: "/third",
        element: <ThirdPage />,
      },
      {
        path: "/detail/:itemId",
        element: <DetailPage />
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
