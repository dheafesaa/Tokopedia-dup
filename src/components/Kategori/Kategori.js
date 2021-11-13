import React from "react";
import shoes from "../../images/sepatu.jpg";
import food from "../../images/food.jpg";
import figure from "../../images/figure.jpg";
import bag from "../../images/bag.jpg";
import down1 from "../../images/down1.png";
import down2 from "../../images/down2.png";
import down3 from "../../images/down3.png";
import down4 from "../../images/down4.png";
import down5 from "../../images/down5.png";
import down6 from "../../images/down6.png";
import down7 from "../../images/down7.png";
import "./Kategori.scss";

const Kategori = () => {
  return (
    <section className="kategori">
      <div className="kategori_container">
        <div className="kategori_container__up">
          <div className="event_left">
            <section className="kategori_widget">
              <div className="kategori_widget__head">
                <div className="kategori_widget__title">
                  <h2 className="kategori_widget__name">Kategori Pilihan</h2>
                </div>
              </div>
              <div className="kategori_widget__body">
                <div className="kategori_widget__all">
                  <div className="kategori_widget__data1">
                    <div className="kategori_widget__data1_1">
                      <div className="kategori_widget__data1_2">
                        <div className="kategori_widget__data1_3">
                          <div className="kategori_widget__data1_4">
                            <img className="img-data" src={food} alt="Food" />
                          </div>
                        </div>
                      </div>

                      <div className="kategori_widget__data1_2">
                        <div className="kategori_widget__data1_3">
                          <div className="kategori_widget__data1_4">
                            <img
                              className="img-data"
                              src={figure}
                              alt="Figure"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="kategori_widget__data1_2">
                        <div className="kategori_widget__data1_3">
                          <div className="kategori_widget__data1_4">
                            <img className="img-data" src={bag} alt="Bag" />
                          </div>
                        </div>
                      </div>

                      <div className="kategori_widget__data1_2">
                        <div className="kategori_widget__data1_3">
                          <div className="kategori_widget__data1_4">
                            <img className="img-data" src={shoes} alt="Shoes" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kategori_widget__data2"></div>
                  <div className="kategori_widget__data3"></div>
                </div>
              </div>
            </section>
          </div>
          <div className="event_right">
            <div className="kategori_digital"></div>
            <section className="kategori_digital__all">
              <div className="kategori_digital__head">
                <div className="kategori_digital__head_left">
                  <h2 className="kategori_digital__head_name1">
                    Top Up & Tagihan
                  </h2>
                </div>
                <div className="kategori_digital__head_right">
                  <span className="kategori_digital__head_name2">
                    Lihat Semua
                  </span>
                </div>
              </div>

              <section className="digital_widgetHome">
                <div className="digital_widgetHomeAll">
                  <div className="digital_widgetHomeAll__1">
                    <div className="digital_widgetHomeAll__txt">
                      <div className="digital_tab" aria-label="Tab Section">
                        <div className="digital_tab__holder">
                          <div className="digital_tab__wrapper0">Pulsa</div>
                          <div className="digital_tab__wrapper">Paket Data</div>
                          <div className="digital_tab__wrapper">
                            Listrik PLN
                          </div>
                          <div className="digital_tab__wrapper">Flight</div>
                          <div className="digital_tab__wrapperLine"></div>
                        </div>
                      </div>
                    </div>
                    <div className="digital_widgetHomeAll__lg">
                      <button className="digital_more">
                        <span className="digital_more__presentation0">
                          <div className="digital_more__presentation"></div>
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="digital_widgetHomeAll__2">
                    <div className="digital_inputAll">
                      <div className="digital_telp">
                        <label
                          className="digital_telp__label"
                          title="Nomor Telepon"
                        >
                          Nomor Telepon
                        </label>
                        <div className="digital_telp__input">
                          <div className="digital_telp__input1">
                            <div className="digital_telp__input2">
                              <input
                                className="digital_telp__clientNum"
                                type="number"
                                placeholder="081215172011"
                                name="clientNumber"
                                min="0"
                                max="9"
                              ></input>
                              <div className="digital_telp__input3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="digital_nominal">
                        <label
                          className="digital_nominal__label"
                          title="Nominal"
                        >
                          Nominal
                        </label>
                        <div className="digital_nominal__select">
                          <button
                            className="digital_nominal__select1"
                            type="button"
                            disabled
                          >
                            <label
                              className="digital_nominal__select2"
                              disabled
                            >
                              <span className="digital_nominal__select3"></span>
                            </label>
                          </button>
                          <div className="digital_nominal__select4">
                            <ul
                              role="listbox"
                              className="digital_nominal__select5"
                            >
                              <li
                                role="option"
                                aria-selected="true"
                                className="digital_nominal__select6"
                              >
                                <button
                                  type="button"
                                  className="digital_nominal__select7"
                                >
                                  <span className="digital_nominal__select8"></span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="digital_beli">
                        <button disabled className="digital_beli__btn">
                          <span className="digital_beli__txt">Beli</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className="kategori_container__down">
          <div className="down_all">
            <div className="down_container">
              <div className="down_container__1">
                <div className="down_data">
                  <img className="img-choose" src={down1} alt="Down1" />
                  <span>Kategori</span>
                </div>
                <div className="down_data">
                  <img className="img-choose" src={down2} alt="Down2" />
                  <span>Handphone & Tablet</span>
                </div>
                <div className="down_data">
                  <img className="img-choose" src={down3} alt="Down3" />
                  <span>Top-Up & Tagihan</span>
                </div>
                <div className="down_data">
                  <img className="img-choose" src={down4} alt="Down4" />
                  <span>Elektronik</span>
                </div>
                <div className="down_data">
                  <img className="img-choose" src={down5} alt="Down5" />
                  <span>Travel & Entertainment</span>
                </div>
                <div className="down_data">
                  <img className="img-choose" src={down6} alt="Down6" />
                  <span>Perawatan Hewan</span>
                </div>
                <div className="down_data">
                  <img className="img-choose" src={down7} alt="Down7" />
                  <span>Keuangan</span>
                </div>
              </div>
              <div className="down_container__2"></div>
              <div className="down_container__3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kategori;
