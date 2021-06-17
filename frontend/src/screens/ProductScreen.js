import React, { useEffect, useState } from 'react'; import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/poductAction';
import LoadingBox from '../components/LoadingBob';
import MessageBox from '../components/MessageBox';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    return (
        <div>
            {
                loading ? (
                    <LoadingBox></LoadingBox >
                )

                    : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <div>
                            <Link to="/">Back to Home</Link>
                            <div id="row" className="row top">
                                <div className="col-2">
                                    <img
                                        className="large"
                                        src={product.image}
                                        alt={product.name}
                                    ></img>
                                </div>
                                <div className="col-1">
                                    <ul>
                                        <li>
                                            <h1>{product.name}</h1>
                                        </li>
                                        <li>Pirce : {product.price}rs</li>
                                        <li>
                                            Description:
                                            <p>{product.description}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-1">
                                    <div className="card card-body">
                                        <ul>
                                            <li>
                                                <div id="row" className="row">
                                                    <div>Price</div>
                                                    <div className="price">{product.price}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div>Status</div>
                                                    <div>
                                                        {product.countInStock > 0 ? (
                                                            <span className="success">In Stock</span>
                                                        ) : (
                                                            <span className="danger">Unavailable</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            {product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div id="row" className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select
                                                                    value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}
                                                                >
                                                                    {[...Array(product.countInStock).keys()].map(
                                                                        (x) => (
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={addToCartHandler}
                                                            className="primary block"
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
            }
            <footer className="footer-distributed fi ">
                <div className="fi">

                    <div className="footer-left fi">

                        <h3>THE<span>Dastkaars</span></h3>

                        <p className="footer-links">
                            <a href="#">Home</a>
                            ·
                            <a href="#">Products</a>
                            ·
                            <a href="#">Pricing</a>
                            ·
                            <a href="#">About</a>
                            ·
                            <a href="#">Faq</a>
                            ·
                            <a href="#">Contact us</a>
                        </p>

                        <p className="footer-company-name">Dastkaars &copy; 2018</p>
                    </div>

                    <div className="footer-center fi">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>Silawali </span> District Sargoodha</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>03024610981</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:thedastkaars@hotmail.com">thedastkaars@hotmail.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right fi">

                        <p className="footer-company-about">
                            <span>Dastkaars</span>
                            All of our products are made with pure rose/sheesham wood. 100% handmade products.
                        </p>

                        <div className="footer-icons">

                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>


                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}






























