import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { updateCartUI, addWorkshopsToCart } from "../../Redux/cartSlice";
import { itemsByApi } from "../../Redux/listSlice";
import { ProductCard, Category } from "../../components/home";
import {
  Navbar,
  CartSidebar,
  Footer,
  CheckoutForm,
  Thanks,
} from "../../components/common";
import "../../styles/productList.css";

const Home = () => {
  const dispatch = useDispatch();
  const { isCartOpen, workshop } = useSelector((state) => state.cart);

  const [workshops, setWorkshops] = useState([]);
  const [filterWorkshops, setFilterWorkshops] = useState([]);
  const [numberOfItems, setNumberOFItems] = useState(9);
  const [loadMore, setLoadMore] = useState("Load More");
  const [checkout, setCheckout] = useState("checkout-none");
  const [thanks, setThanks] = useState("thanks-none");
  useEffect(() => {
    const workshopsApi = async () => {
      const { data } = await axios.get("http://localhost:3000/workshops");

      //For adding a quantity property to every workshop in the array
      const theData = () => {
        for (let i = 0; i < data.length; i++) {
          data[i].quantity = 1;
        }
      };
      theData();

      // for Sorting the workshops on basis of their date
      const sortedData = data.sort(function (left, right) {
        return moment.utc(left.date).diff(moment.utc(right.date));
      });
      setWorkshops(sortedData);
      setFilterWorkshops(sortedData);
      dispatch(itemsByApi(data));
    };
    workshopsApi();
  }, []);

  const filterCategory = (param) => {
    let newArray = [];
    workshops.filter((item) => {
      if (item.category === param) {
        newArray = [...newArray, item];
      }
      if (param === "all") {
        newArray = [...newArray, item];
      }
      setNumberOFItems(newArray.length);
    });
    if (param === "all") {
      setLoadMore("Load More");
    } else {
      setLoadMore("");
    }
    setFilterWorkshops(newArray);
  };
  const loadMoreProducts = () => {
    setNumberOFItems(workshops.length);
    setLoadMore("");
  };
  const openCart = (item) => {
    dispatch(updateCartUI(true));
    dispatch(addWorkshopsToCart(item));
  };
  const backToShop = () => {
    setThanks("thanks-none");
    dispatch(updateCartUI(false));
  };

  return (
    <div className="workshop-listing">
      <Navbar />
      <div className="header-section">
        <Category onCategoryClick={(param) => filterCategory(param)} />
        <div className="product-list">
          <div className="heading">
            <h2>Workshops</h2>
            <h6>
              Displayed: <span>{numberOfItems}</span>
            </h6>
          </div>
          <div>
            {workshops.length ? (
              <div className="list">
                {filterWorkshops.map((item, index) => {
                  if (index < numberOfItems) {
                    return (
                      <ProductCard
                        key={item.id}
                        item={item}
                        onBtnClick={() => openCart(item)}
                      />
                    );
                  }
                })}
              </div>
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
          <div className="load">
            {loadMore ? (
              <div className="load-more" onClick={() => loadMoreProducts()}>
                <p>Load More</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <CartSidebar
        isOpen={isCartOpen}
        checkoutFormVisible={checkout}
        onClick={() =>
          workshop.length ? setCheckout("checkout-form") : checkout
        }
      />
      <CheckoutForm
        classes={checkout}
        onFormClose={() => setCheckout("checkout-none")}
        onCheckout={() => {
          setCheckout("checkout-none");
          setThanks("thanks");
        }}
      />
      <Thanks classes={thanks} onClick={() => backToShop()} />
      <Footer />
    </div>
  );
};
export default Home;
