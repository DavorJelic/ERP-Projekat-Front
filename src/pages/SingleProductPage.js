import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    description,
    vacantSeats,
    stars,
    id: sku,
    date,
    time,
  } = product;

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} />

            <p className="desc">{description}</p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Available seats : </span>
              {vacantSeats > 0 ? vacantSeats : "No available seats"}
            </p>

            <p className="info">
              <span>Date : </span>
              {date}
            </p>
            <p className="info">
              <span>Time : </span>
              {time}
            </p>
          </section>
          {vacantSeats > 0 && <AddToCart product={product} />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .radio {
    height: 2em;
    width: 2em;
  }
  .price {
    color: red;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }

  .btn {
    background: red;
  }
`;

export default SingleProductPage;
