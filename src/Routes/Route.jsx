import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Registration/Register";
import AllPackages from "../Page/AllPackages/AllPackages/AllPackages";
import SinglePackageDetails from "../Page/AllPackages/SinglePackageDetails/SinglePackageDetails";
import BookingForm from "../Page/AllPackages/SinglePackageDetails/BookingForm";
import GuideProfile from "../Page/Home/Tourism/MeetOurTourGuides/GuideProfile";
import Bookings from "../Page/AllPackages/SinglePackageDetails/MyBookings/Bookings";
import ContactUs from "../Components/ContactUs/ContactUs";
import AboutUs from "../Components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/allpackages",
        element: <AllPackages></AllPackages>
      },
      {
        path: "/PackageDetails/:id",
        element: <SinglePackageDetails></SinglePackageDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/allplace/${params.id}`)
      },
      {
        path: "/bookingform",
        element: <BookingForm></BookingForm>
      },
      {
        path: "/guideProfile/:id",
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/tourguides/${params.id}`)
      },
      {
        path: "/mybookings",
        element: <Bookings></Bookings>
      }
    ]
  },
]);
export default router;
