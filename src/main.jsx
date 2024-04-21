import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContactPage from "./Pages/ContactPage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./Pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/contact/:name",
                element: <ContactPage />,
            },
            {
                path: "/projects",
                element: <ProjectPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
