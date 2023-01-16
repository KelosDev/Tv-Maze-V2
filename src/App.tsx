import "./App.scss";
import { AuthProvider } from "./Context/authContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import Favourite from "./pages/Favourite";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer"

import Protected from "./router/protected";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  {
    path: "/search",
    element: (
      <Protected>
        <Navbar></Navbar>
        <Footer></Footer>
        <SearchPage />
      </Protected>
    ),
  },
  {
    path: "/search/:showId",
    element: (
      <Protected>
        <Navbar></Navbar>
        <Footer></Footer>
        <DetailPage />
      </Protected>
    ),
  },
  {
    path: "/favourite",
    element: (
      <Protected>
        <Navbar></Navbar>
        <Footer></Footer>
        <Favourite />
      </Protected>
    ),
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
