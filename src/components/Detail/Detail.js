import React from "react";
import detail1 from "../../images/detail1.jpg";
import star from "../../images/star.svg";
import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail_wrapper">
        <div className="detail_wrapper__images">
          <div className="detail_wrapper__container">
            <div className="detail_wrapper__container-up">
              <div className="detail_wrapper__container-up1">
                <div className="detail_wrapper__container-up2">
                  <img className="detail_img" src={detail1} alt="Breylee" />
                </div>
              </div>
            </div>
            <div className="detail_wrapper__container-down">
              <div className="detail_wrapper__container-down1">
                <div className="detail_wrapper__container-down2">
                  <div className="detail_wrapper__container-down3">
                    <div className="detail_wrapper__container-down4">
                      <img className="detail_img" src={detail1} alt="Breylee" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_wrapper__ticker">
          <div className="detail_wrapper__product-1">
            <h1 className="detail_wrapper__product-name">
              BREYLEE Step 1 Blackhead Remover Mask - Pembersih Komedo (17ml) -
              Breylee Step 1
            </h1>
            <div className="detail_wrapper__product-2">
              <div className="detail_wrapper__product-items">
                <div className="detail_wrapper__product-sold">
                  <span>Terjual 78</span>
                </div>
                <span
                  aria-hidden="true"
                  className="detail_wrapper__product-dot"
                >
                  •
                </span>
                <div>
                  <span className="detail_wrapper__product-star">
                    <img className="star_img" src={star} alt="Star" />
                    <span className="detail_wrapper__product-score">4.9</span>
                  </span>
                  <span className="detail_wrapper__product-rating">(53 ulasan)</span>
                </div>
                <div className="detail_wrapper__product-discuss"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_wrapper__options"></div>
        <div className="detail_wrapper__product"></div>
        <div className="detail_wrapper__content"></div>
      </div>
    </div>
  );
};

export default Detail;
