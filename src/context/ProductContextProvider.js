import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};

const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
    }
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! CREATE
  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };

  //! GET

  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const values = {
    createProduct,
    getProducts,
    products: state.products,
  };

  return (
    <div>
      <productContext.Provider value={values}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
