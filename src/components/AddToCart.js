import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { formatPrice } from "../utils/helpers";
import { ticketTypes } from "../utils/constants";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, vacantSeats } = product;

  const [amount, setAmount] = useState(1);

  const [types, setTypes] = useState([]);

  const filteredTypes = ticketTypes.filter((t) => t.productId === id);
  // console.log(types);
  // console.log(types[0].price);

  // const [ticketPrice, setTicketPrice] = useState(types[0].price);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [type, setType] = useState(null);
  // const [type, setType] = useState(types[0].type);
  console.log(ticketPrice);

  useEffect(() => {
    setTypes(filteredTypes);
    setTicketPrice(filteredTypes[0].price);
    setType(filteredTypes[0].type);
    console.log(ticketPrice);
  }, []);

  const handleChange = (t) => {
    setTicketPrice(t.price);
    setType(t.type);
  };

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > vacantSeats) {
        tempAmount = vacantSeats;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors"></div>
      <div>
        {types.map((type) => {
          return (
            <div key={type.id} className="price info">
              <input
                type="radio"
                name="price"
                value={type.price}
                className="radio"
                checked={type.price === ticketPrice}
                onChange={() => handleChange(type)}
              />
              <p>
                {type.type} {formatPrice(type.price)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, ticketPrice, amount, product, type)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
