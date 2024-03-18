const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
