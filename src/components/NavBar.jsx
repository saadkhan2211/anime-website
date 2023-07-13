import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to='/'>E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/shop'>Shop</Link>
                            </li>
                        </ul>
                        <form className="input-group w-50 mx-auto">
                            <input className="form-control" type="search" placeholder="Search"/>
                            <button className="btn btn-secondary input-group-text" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4" to='/cart'><i className="bi bi-bag"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;