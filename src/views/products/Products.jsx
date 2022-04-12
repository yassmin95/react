import {useEffect, useState} from "react";
import {Card, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Products(){

    const [products, setProducts] = useState(null);

    const FetchAllProducts= ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }

    useEffect(()=>{
        FetchAllProducts();
    },
    []
    )

    return(
        <div className="container">
            <div className="row">
            {
                products
                &&
                products.length
                ?
                products.map(product=>{
                    return(
                        <div key={product.id} className="col-3 text-center">
                            <Card  className="text-center justify-content-center align-content-center d-flex mx-auto my-2">
                                <div className="img">
                                <Card.Img variant="top"  src={product.image} style={{ width:200,height:200 }}/>
                                </div>
                                <Card.Body>
                                    <Card.Title style={{overflow:"hidden", height:50}}>{product.title}</Card.Title>
                                    <Card.Text style={{overflow:"hidden", height:50}}>
                                        {product.description}
                                    </Card.Text>
                                    <p>Price: {product.price}$</p>
                                    <div className="d-flex align-baseline justify-content-center">
                                         <ReactStars
                                            count={5}
                                            size={18}
                                            value={product.rating.rate}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <Link to={`${product.id}`}><button className="btn btn-outline-primary mt-3">Show details</button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }):
                    <div className="text-center text-light">
                        <Spinner animation="border" className="mx-auto"/>
                    </div>
            }
            </div>
        </div>
    )
}

export default Products;