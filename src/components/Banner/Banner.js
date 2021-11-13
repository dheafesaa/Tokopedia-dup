import React from "react";
import banner1 from "../../images/banner1.jpg";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-slide">
        <div className="banner-container">
          <div className="banner-container__img">
            <div className="banner-container__img_1">
              <div className="banner-container__img_2">
                <div className="banner-container__img_3">
                  <div className="banner-container__img_4">
                    <div className="banner-container__img_5">
                      <div className="banner-container__img_6">
                        <img className="banner1" src={banner1} alt="Banner1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-container__navgat">
            <div className="banner-container__navgat_left">
              <div className="banner-container__navgat_left__control">
                <div className="bullets">
                  <span aria-label="pc-item" className="bullets_1"></span>
                  <span aria-label="pc-item" className="bullets_2"></span>
                  <span aria-label="pc-item" className="bullets_3"></span>
                </div>
              </div>
            </div>
            <div className="banner-container__navgat_right">
              <span className="banner-container__navgat_right__promo">
                Lihat Promo Lainnya
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
