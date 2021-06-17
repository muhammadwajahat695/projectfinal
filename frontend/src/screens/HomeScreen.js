import React, { useEffect } from 'react';
import Product from '../components/Produst';
import LoadingBox from '../components/LoadingBob';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/poductAction';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div id="row" className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
            )}
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

        </div >

    );
}