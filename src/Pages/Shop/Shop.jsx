import Products from './Products.json';


const Shop = () => {

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center align-items-center'>
                {Products.map(product => {
                    return(
                        <div className='col-md-4 my-3'>
                            <div className="card rounded-2 border-2 border-secondary h-75 p-3" key={product.id}>
                                <img className="card-img-top img-fluid" src={product.imgUrl} alt={product.name} />
                                <div className="card-body row justify-content-center align-items-center">
                                    <h6 className="card-title col-md-8">{product.name}</h6>
                                    <h5 className="card-text text-end col-md-4">${product.price}</h5>
                                    <button type="button" className='btn btn-secondary mt-3'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Shop;