import React from "react";
import ipad from "../../images/ipad.jpg";
import hoodie from "../../images/hoodie.jpg";
import smartwatch from "../../images/smartwatch.png";
import kaoskaki from "../../images/kaoskaki.png";
import helm from "../../images/helm.jpg";
import eiger from "../../images/eiger.jpg";
import vans from "../../images/vans.jpg";
import headset from "../../images/headset.jpg";
import "./Trending.scss";

const Trending = () => {
  return (
    <section className="headTrending">
      <div className="trending">
        <div className="trending_keyword"></div>
        <section className="trending_container">
          <div className="trending_head">
            <div className="trending_title">
              <h2 className="trending_name">Lagi Trending, nih</h2>
            </div>
            <button className="trending_refresh">
              <i
                className="trending_logo"
                aria-hidden="true"
                role="presentation"
                width="22px"
                height="22px"
              ></i>
              <span className="trending_txt">Muat Lainnya</span>
            </button>
          </div>
          <div className="trending_data">
            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={ipad}
                    alt="Ipad"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Ipad 2018</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>

            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={hoodie}
                    alt="Hoodie"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Erigo Hoodie</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>

            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={smartwatch}
                    alt="Smartwatch"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Smartwatch</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>

            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={kaoskaki}
                    alt="Kaos Kaki"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Kaos Kaki</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>
            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={helm}
                    alt="Helm"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Helm Sepeda</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>
            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={eiger}
                    alt="Eiger"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Tas Eiger</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>
            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={vans}
                    alt="Vans"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Sepatu Vans</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>
            <section className="trending_data__card">
              <div className="trending_data__cardCon">
                <div className="trending_data__img">
                  <img
                    className="trending_data__img-1"
                    src={headset}
                    alt="Headset"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="trending_data__txt">
                  <h4 className="trending_data__txt1">Headset Gaming</h4>
                  <span className="trending_data__txt2">25rb produk</span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Trending;
