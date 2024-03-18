import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
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
    <>
      <header>
        <nav className="navbar navbar-expand-md bg-dark w-100">
          <div className="container-fluid">
            <a className="btn btn-dark fs-5 m-1 me-3" href="/">
              Inicio
            </a>
            <button
              className="navbar-toggler bg-light m-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="btn btn-light fs-5 m-1" href="/products">
                  Productos
                </a>
                <a className="btn btn-light fs-5 m-1" href="/orders">
                  Ordenes
                </a>
                <a className="btn btn-light fs-5 m-1" href="/products/new">
                  Crear un producto
                </a>
                <a className="btn btn-light fs-5 m-1" href="/users">
                  Perfiles
                </a>
                <a className="btn btn-light fs-5 m-1" href="/sessions/register">
                  Crea un perfil
                </a>
                <a className="btn btn-light fs-5 m-1" href="/sessions/login">
                  Iniciar sesión
                </a>
                <span className="btn btn-light fs-5 m-1" id="signout">
                  Cerrar sesion
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow-1 w-100 d-flex flex-column">
        <section id="background">
          <h1 className="title">Apple Store Mendoza</h1>
          <p>
            En Apple Store Mendoza ofrecemos una experiencia única para los
            entusiastas de la tecnología en la región. Ubicada en el corazón de
            la ciudad, esta tienda especializada en productos Apple se destaca
            por su elegante diseño y personal altamente capacitado. Desde los
            últimos modelos de iPhone hasta los innovadores dispositivos Mac y
            accesorios exclusivos, la tienda cuenta con un inventario completo.
            Los clientes pueden explorar las últimas novedades y recibir
            asesoramiento experto sobre sus necesidades tecnológicas. Además, la
            Apple Store Mendoza organiza eventos y talleres para mantener a la
            comunidad actualizada sobre las últimas tendencias de la marca.
          </p>
        </section>
        <h2 className="subtitle mt-4 mb-2 text-center">Nuestros productos</h2>
        <span className="m-auto d-flex justify-content-between align-items-center">
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
        </span>
        <section
          id="products"
          className="d-flex flex-wrap justify-content-evenly w-100 mt-2 mb-4"
        >
          {products.map((each) => (
            <div className="card m-2 w-25 " key={each.id}>
              <img src={each.photo} alt="altprod.jpg" />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-center">{each.title}</h5>
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
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
