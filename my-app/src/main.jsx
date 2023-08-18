import * as React from "react";
import * as ReactDOM from "react-dom/client";
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import "./index.css";

[
    /* other routes */
    {
      path: "contacts/:contactId/destroy",
      action: destroyAction,
      errorElement: <div>Oops! There was an error.</div>,
    },
  ];