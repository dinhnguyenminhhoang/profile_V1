import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import Profile from "./Pages/Profile.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import "./index.css";
// import HomePage from "./Pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/projects",
        element: <ProjectPage />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
