// import data from '../data';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  // Searching specific product
  function SearchFilters(input, selector) {
    document.addEventListener('keyup', (e) => {
      if (e.target.matches(input)) {
        document.querySelectorAll(selector).forEach((el) => {
          console.log(el.parentElement);
          el.children[0].children[0].alt
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
            ? el.parentElement.classList.remove('filter')
            : el.parentElement.classList.add('filter');
        });
      }
    });
  }
  SearchFilters('.card-filter', '.card');

  return (
    <div>
      <div className="m4">
        <Helmet>
          <title>Alvar | Music</title>
        </Helmet>
        <div className="search">
          <input
            type="search"
            placeholder="search for your flip flops"
            className="card-filter"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="products">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row className="cards-products">
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product} className="product"></Product>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
