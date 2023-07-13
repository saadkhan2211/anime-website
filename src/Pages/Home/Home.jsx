import { Link } from "react-router-dom";
import shirt from './shirt.png';

const Home = () => {
    return(
        <div className="home-bg">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h1>Welcome to Our Online Shop</h1>
                        <h4>Get Free Delivery on your first order</h4>
                        <button className="btn btn-dark text-white mt-2">
                            <Link className="text-white text-decoration-none p-2" to='/shop'>Shop</Link>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid w-75" src={shirt} alt="shirt"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;