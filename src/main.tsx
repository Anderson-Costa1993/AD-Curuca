import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HomePage } from "./routes/Home/HomePage.tsx";
import { EventsPage } from "./routes/Eventos/Events.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/eventos", element: <EventsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
