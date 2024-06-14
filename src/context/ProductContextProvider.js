import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: [],
};

const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
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

  //!DELETE

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);

    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  //! Edit

  const editProduct = async (id, editedProduct) => {
    console.log(id, editProduct);
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };

  const values = {
    createProduct,
    getProducts,
    getOneProduct,
    products: state.products,
    deleteProduct,
    oneProduct: state.oneProduct,
    editProduct,
  };

  //! getOneProduct

  return (
    <div>
      <productContext.Provider value={values}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
