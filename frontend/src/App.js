import './other.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Badge, Nav, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import SigninScreen from './screens/SigninScreen';
import ShopScreen from './screens/ShopScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import OrderScreen from './screens/OrderScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PlayListScreen from './screens/PlayListScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar br="dark" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>ALVAR | MUSIC</Navbar.Brand>
              </LinkContainer>
              <div className="playlist-btn">
                <i className="fa-solid fa-play"></i>
                &nbsp;&nbsp;
                <Link to="./Shop">PLAY LIST</Link>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100 justify-content-end">
                  <img
                    src={'/images/uploads/taco.png'}
                    alt="taco"
                    className="taco-icon"
                  />
                  <Link to="/cart" className="nav-link">
                    Tacos
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer
                        className="dropdown-item"
                        to="/signin"
                        onClick={signoutHandler}
                      >
                        <NavDropdown.Item>Sign out</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign in
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main className="main main-home-screen">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/shop" element={<ShopScreen />}></Route>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/playlist" element={<PlayListScreen />}></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/signup" element={<SignupScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="/Shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
          </Routes>
        </main>
        <footer className="footer">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
