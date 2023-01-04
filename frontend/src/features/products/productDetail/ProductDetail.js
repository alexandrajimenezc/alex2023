import React, { useEffect } from "react";
import style from "./productDetail.module.css";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../../products";
import { useSelector, useDispatch } from "react-redux";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
             
  }, [dispatch,id]);

  return (
    <div className={style.product__container}>
      <div className={style.product}>
        <h1>Detalle del Producto:</h1>
        <div className={style.product__info}>
          <img alt="producto" className={style.image} src={product.image} />

          <div className={style.product__details}>
            <span className={style.product__name}>
              <span className={style.product__title}>Producto:</span>
              {product.name}
            </span>
            <span className={style.product__price}>
              <span className={style.product__title}>Precio:</span> $
              {product.price}
            </span>
            <span className={style.product__description}>
              <span className={style.product__title}> Descripción:</span>{" "}
              {product.description}
            </span>
            <span className={style.product__quantity}>
              <span className={style.product__title}> Disponibles: </span>{" "}
              {product.stock}
            </span>
            <span className={style.product__categories}>
              <span className={style.product__title}>Categorias asociadas: </span>{" "}
              {product?.categories?.map(category=>category.name).join(', ')}
            
            </span>
            <div>
              <button className="btn btn__shop">comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
