import { useState, useEffect } from "react";
import axios from "axios";

const ProductosInicio = () => {
  const [products, setProducts] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    axios("http://localhost:8080/api/products")
      .then((res) => {
        setProducts(res.data.response.docs);
        setPrev(res.data.response.prevPage);
        setNext(res.data.response.nextPage);
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="products-container">
      <h2 className="subtitle mt-4 mb-2 text-center">Nuestros productos</h2>
      <div className="input-lupa">
        <input
          id="text"
          type="text"
          className="p-2 text-center"
          placeholder="Buscar"
        />
        <img
          id="search"
          src="https://www.shutterstock.com/image-vector/search-lookup-260nw-1157591290.jpg"
        />
      </div>
      <section
        id="products"
        className="d-flex flex-wrap justify-content-evenly w-100 mt-2 mb-4"
      >
        {products.map((each) => (
          <div className="card" key={each.id}>
            <img src={each.photo} alt="altprod.jpg" />
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title text-center">{each.title}</h5>
              <h5 className="card-title text-center">$ {each.price}</h5>

              <p className="card-text text-center"></p>
              <button type="button" className="btn btn-dark">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </section>
      <span className="d-flex justify-content-center">
        <a
          className="btn btn-danger fs-5 m-4 mt-0"
          href="/?title={{filter}}&page={{prev}}"
        >
          PREV
        </a>

        <a
          className="btn btn-danger fs-5 m-4 mt-0"
          href="/?title={{filter}}&page={{next}}"
        >
          NEXT
        </a>
      </span>
    </div>
  );
};

export default ProductosInicio;
