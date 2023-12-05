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
import Blogs from "../Components/Blogs/Blogs";
import SpecificPackage from "../Page/Home/TourType/SpecificPackage/SpecificPackage";
import MyWishList from "../Components/MyWishList/MyWishList";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../Components/ErrorElement/ErrorElement";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/allpackages",
        element: <AllPackages></AllPackages>
      },
      {
        path: "/PackageDetails/:id",
        element: <PrivateRoute><SinglePackageDetails></SinglePackageDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tour-bd-irect-server.vercel.app/allplace/${params.id}`)
      },
      {
        path: "/bookingform",
        element: <PrivateRoute><BookingForm></BookingForm></PrivateRoute>
      },
      {
        path: "/guideProfile/:id",
        element: <PrivateRoute><GuideProfile></GuideProfile></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tour-bd-irect-server.vercel.app/tourguides/${params.id}`)
      },
      {
        path: "/mybookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      {
        path: "/place/:type",
        element: <SpecificPackage></SpecificPackage>,
        loader: ({ params }) => fetch(`https://tour-bd-irect-server.vercel.app/place/${params.type}`)
      },
      {
        path: "/mywishlist",
        element: <MyWishList></MyWishList>,

      }
    ]
  },
  {
    path: '/dashboard', 
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // {
      //   path: '/dashboard/adminHome',
      //   element: <PrivateRoutes> <AdminHome></AdminHome></PrivateRoutes>
      // },
      // {
      //   path: '/dashboard/add-a-camp',
      //   element: <PrivateRoutes><AddCampPage></AddCampPage></PrivateRoutes>
      // },

      // {
      //   path: '/dashboard/manageCamps',
      //   element: <PrivateRoutes><ManageCamps></ManageCamps></PrivateRoutes>
      // },
      // {
      //   path: '/dashboard/userHome',
      //   element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
      // },
      // {
      //   path: '/dashboard/participant-profile',
      //   element: <PrivateRoutes><ParticipantProfilePage></ParticipantProfilePage></PrivateRoutes>
      // },
      // {
      //   path: '/dashboard/healthcareProfessionalHome',
      //   element: <PrivateRoutes><HealthcareProfessionalHome></HealthcareProfessionalHome></PrivateRoutes>
      // },
      // {
      //   path: '/dashboard/professional-profile',
      //   element: <PrivateRoutes><HealthcareProfessionalProfilePage></HealthcareProfessionalProfilePage></PrivateRoutes>
      // },
      // {
      //   path: '/dashboard/registered-camps',
      //   element: <PrivateRoutes><RegisteredCamps></RegisteredCamps></PrivateRoutes>
      // }

    ]
  }
]);
export default router;
