import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import './productdetails.css'

function ProductDetails(){
    const params = useParams();
    const [product, setProduct] = useState(null);


    const FetchOneProduct = ()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }

    useEffect(()=>{
        FetchOneProduct();
    }, [])

    return (
        <div className="container">
            {
                product
                ?
                <div className="row justify-content-center">
                    <div className="card mb-3" style={{maxWidth: 900}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.image} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{product.title}</h2>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text price">{product.price}$</p>
                                   <div className="start">
                                    <ReactStars

                                        count={5}
                                        size={24}
                                        value={product.rating.rate}
                                        activeColor="#ffd700"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               :
                    <div className="text-center text-light">
                        <Spinner animation="border" className="mx-auto"/>
                    </div>

            }
        </div>
    )
}


export default ProductDetails;