import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./layout/footer";
import Nav from "./layout/nav";
import { Home } from "./pages";
import { About, Details, Vehicles } from "./sections";
import Booking from "./pages/Booking/Booking";
import Profile from "./pages/Profile/Profile";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/contact/Contact";


const App = () => {
  
  const Layout = () => {
    return (
      <main className="relative">
          <Nav />
       <Toaster/>
          <Outlet />
       
          <Footer />
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/categories/:cat",
          element: <Vehicles />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
