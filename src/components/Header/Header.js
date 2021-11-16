import React from "react";
import tokopedia from "../../images/tokopedia.png";
import phone from "../../images/phone.png";
import search from "../../images/search.png";
import cart from "../../images/cart.png";
import location from "../../images/location.png";
import down from "../../images/down.png";
import "./Header.scss";

import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "store/actions/cart";
const Header = () => {
  const reducerCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartList = Object.keys(reducerCart.data);

  function fnDeleteCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="header" style={{ marginTop: 110, padding: 1 }}>
      <div className="site-header">
        <div className="site-header__top">
          <div className="menu_right">
            <img
              className="img-phone"
              src={phone}
              alt="Phone"
              width={18}
              height={18}
            />
            <span className="download-tokped">Download Tokopedia App</span>
          </div>
          <div className="menu_left">
            <span>Tentang Tokopedia</span>
            <span>Mitra Tokopedia</span>
            <span>Mulai Berjualan</span>
            <span>Promo</span>
            <span>Tokopedia Care</span>
          </div>
        </div>
        <div className="site-header__bottom">
          <div className="img-tokped">
            <img src={tokopedia} alt="Tokopedia" width={150} height={30} />
          </div>

          <div className="sub-1">
            <div className="btn-kategori">
              <div className="sub-text">Kategori</div>
            </div>
          </div>

          <div className="container-search">
            <form className="search">
              <div className="search__box">
                <div className="search__bar">
                  <div className="search__item">
                    <button
                      className="btn-search"
                      type="submit"
                      aria-label="Tombol Pencarian"
                    >
                      <img src={search} alt="Search" width={20} height={20} />
                    </button>
                    <input
                      className="input-search"
                      aria-label="Bidang Pencarian"
                      placeholder="Cari di Tokopedia"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="sub-3">
            <div className="cart">
              <img src={cart} alt="Cart" width={20} height={20} />
              <div className="bubble">{cartList.length}</div>
              <div className="submenu">
                {cartList.map((id) => {
                  const item = reducerCart.data[id];

                  return (
                    <div key={id}>
                      <h6>{item.name}</h6>
                      <button onClick={() => fnDeleteCart(id)}>delete</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="sub-4"></div>

          <div className="sub-5">
            <button className="btn-in">Masuk</button>
            <button className="btn-up">Daftar</button>
          </div>

          <div className="sub-6">
            <span className="data-header">Hoodie Wanita</span>
            <span className="data-header">Ipad Mini 4</span>
            <span className="data-header">Xiaomi Mi A1</span>
            <span className="data-header">Xiaomi Redmi 7</span>
            <span className="data-header">Kaos Lengan Panjang</span>
            <span className="data-header">Xiaomi Redmi 6a</span>
          </div>

          <div className="sub-7">
            <img src={location} alt="Location" width={15} height={15} />
            <div className="loc-label">
              <p className="loc-label__send">Dikirim ke</p>
              <p className="loc-label__live">Jakarta Pusat</p>
              <img
                className="img-down"
                src={down}
                alt="Down"
                width={7}
                height={7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
