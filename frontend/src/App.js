import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch, useSelector } from 'react-redux'; import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { signout } from './actions/userAction';
import SigninScreen from './screens/signinscreen';
import shippingscreen from './screens/shippingscreen'

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header id="rows" >
          <nav className="navbar justify-content-between">
            <Link className="brand" to="">
              <i className="fa fa-fw fa-home " id="brand"></i>
              Dastkaars
            </Link>
            <form className="form-inline">
              <div id="ro">
                <a id="link" href="#"><i className="fa fa-fw fa-search "></i> Search</a>
                {/* <a id="link" href="./cart.html"><i className="fa fa-fw fa-cart-arrow-down aligm  "></i> Cart</a>
                <a id="link" href="./login.html"><i className="fa fa-fw fa-user"></i> Login</a> */}
                <Link to="/cart">
                  <i className="fa fa-fw fa-cart-arrow-down aligm  "></i>
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
                {userInfo ? (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/signin">Sign In</Link>
                )}
              </div>
            </form>
          </nav>
        </header>
        <main>
          <Route path="/shipping" component={shippingscreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>


          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
        <footer >

        </footer>

      </div >
    </BrowserRouter>
  );
}

export default App;
