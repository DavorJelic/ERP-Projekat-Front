import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ name, category, id, description }) => {
  let imgSrc = "";
  if (category === "concert") {
    imgSrc =
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg";
  } else if (category === "theatre") {
    imgSrc =
      "https://thumbs.dreamstime.com/b/theater-scene-theatrical-masks-theater-masks-red-background-golden-masks-theater-scene-mesh-clipping-mask-150708129.jpg";
  } else if (category === "cinema") {
    imgSrc =
      "https://media.istockphoto.com/photos/red-carpet-and-barrier-picture-id813637356?k=20&m=813637356&s=612x612&w=0&h=0V7ALBS53K0LJmiY13jbUuxf9RBKJSI-NoJJMXSw1-c=";
  } else {
    imgSrc = "https://newevent.rs/wp-content/uploads/2021/05/new-event-fb.jpg";
  }

  return (
    <Wrapper>
      <div className="container">
        <img src={imgSrc} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
