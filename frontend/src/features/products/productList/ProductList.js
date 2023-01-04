import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./productList.module.css";
import { getProducts } from "../../../products";
import { Link } from "react-router-dom";
export const ProductList = () => {
  const inputSearch = useRef(null);
  const { productsList } = useSelector((state) => state.productsList);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    page: "1",
    limit: undefined,
    keyword: "",
  });
  useEffect(() => {
    dispatch(getProducts(filters));
  }, [dispatch, filters]);

  const onChangeTextSearch = (e) => {
    e.preventDefault();
    const text = inputSearch.current.value;
    setFilters({ page: "1", limit: undefined, keyword: text });
  };

  const onSearchSubmit = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    dispatch(getProducts(filters));
    inputSearch.current.value = "";
    setFilters({ page: "1", limit: undefined, keyword: "" });
  };
  const onClickSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(getProducts(filters));
    inputSearch.current.value = "";
  
  };
  const next = () => {
    console.log("next");
    const newCurrentPage = (+productsList.currentPage + 1).toString();
    if (productsList.lastPage >= newCurrentPage) {
    console.log("next2");
      setFilters({ page: newCurrentPage, limit: undefined, keyword: "" });
      getProducts(filters);
    }
    return;
  };
  const prev = () => {
    console.log("next");
    const newCurrentPage = (+productsList.currentPage - 1).toString();
    if (productsList.prevPage !== null) {
      setFilters({ page: newCurrentPage, limit: undefined, keyword: "" });
      getProducts(filters);
    }
    return;
  };
  const clearFilters = () => {
    inputSearch.current.value = "";
    setFilters({ page: "1", limit: undefined, keyword: "" });
  };
  return (
    <div className={style.product__container}>
      <div className={style.search__container}>
        <input
          ref={inputSearch}
          onKeyDown={onSearchSubmit}
          onChange={onChangeTextSearch}
          type="text"
          placeholder=" Buscar producto"
        />
        <button className="btn btn__primary" onClick={onClickSearchSubmit}>
          buscar
        </button>
        <button className="btn btn__warning" onClick={clearFilters}>
         limpiar
        </button>
      </div>
      <div className={style.card__container}>
        {productsList?.data?.map((product) => (
          <div className={style.card} key={product.id}>
            <img className={style.image} src={product.image} alt="producto" />
            <div className={style.card__details}>
              <span className={style.card__name}> {product.name} </span>
              {/* <span className={style.card__description}> <span className={style.card__title}> Descripción:</span> {product.description} </span> */}
              <span className={style.card__price}>
                <span className={style.card__title}>Precio:</span> $
                {product.price}
              </span>
              <span className={style.card__quantity}>
                <span className={style.card__title}> Disponibles: </span>{" "}
                {product.stock}{" "}
              </span>
            </div>
            <Link to={`/products/${product.id}`}>
              <button className="btn btn__primary">detalles</button>
            </Link>
          </div>
        ))}
      </div>
    {
productsList?.data?.length >0 &&  <div className="pagination">
<button className="btn btn__pagination" onClick={prev}>&lt; </button>Página {productsList.currentPage}
<button className="btn btn__pagination" onClick={next}>&gt; </button>
</div>
    }
     
    </div>
  );
};
