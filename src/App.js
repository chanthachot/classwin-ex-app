import RouteErrorPage from "./utils/RouteErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"
import PrivateRoutes from './utils/PrivateRoutes';
import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./themes/theme";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: '/login', element: <Login /> },
        { path: '/home', element: <Home /> },
        { path: '/signup', element: <SignUp /> },
      ],
      errorElement: <RouteErrorPage />,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/main', element: <PrivateRoutes><Main /></PrivateRoutes> },
      ],
      errorElement: <RouteErrorPage />,
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
