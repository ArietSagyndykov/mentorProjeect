import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import ProductList from "../components/products/ProductList";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import AddCategory from "../components/products/AddCategory";
import AboutPage from "../pages/AboutPage";
import Contacts from "../pages/Contacts";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductList /> },
    { id: 3, link: "/addProduct", element: <AddProduct /> },
    { id: 4, link: "/edit/:id", element: <EditProduct /> },
    { id: 5, link: "/addCategory", element: <AddCategory /> },
    { id: 6, link: "/about", element: <AboutPage /> },
    { id: 7, link: "/contacts", element: <Contacts /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route key={elem.id} path={elem.link} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
