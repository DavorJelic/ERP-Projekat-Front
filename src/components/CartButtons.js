import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus, FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { UseAuthContext } from "../context/auth_context";
import jwt from 'jwt-decode'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalItems } = useCartContext();

  const { token, removeToken } = UseAuthContext();

  const logout = () => {
    removeToken();
  };

  if(token){
    var jwtToken = jwt(token)
  }

  return (
    <Wrapper className="cart-btn-wrapper">
      {token && jwtToken.role === "ADMIN" && 
        <Link to="/newEvent">
          <FaPlus />
        </Link>
      }
      {token && jwtToken.role === "ADMIN" ?
      <Link to="/invoices">
        <FaEye />
      </Link> :
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>
      }
      {!token ? (
        <Link to="/login" className="auth-btn">
          Login
        </Link>
      ) : (
        <Link to="/" onClick={logout} className="auth-btn">
          Logout
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    width: 7px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    margin-left: 0px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
