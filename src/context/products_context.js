import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_mock } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  productLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // const fetchProducts = async() => {
  // dispatch({ type: GET_PRODUCTS_BEGIN });
  // try {
  //   const respone = await axios.get('http://localhost:5000/api/event');
  //   const products = respone.data
  //   dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: products});
  // } catch (error) {
  // dispatch({type: GET_PRODUCTS_ERROR})
  // }
  
  // }

  // useEffect(()=>{
  //   fetchProducts();
  // },[])

  // const fetchSingleProduct = async (url) => {
  //   dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/products/9e6ed87f-e0e5-470f-9ba0-b3eb23a3d555"  //Ne zakucavaj vrednost!
  //     );
  //     const singleProduct = response.data;
  //     dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
  //   } catch (error) {
  //     dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  //   }
  // };

  const fetchProducts = () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    const response = products_mock;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response });
  };

  const fetchSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    const response = products_mock[id - 1];
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
