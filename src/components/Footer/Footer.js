import React from "react";
import fb from "images/fb.svg";
import tw from "images/tw.svg";
import pt from "images/pt.svg";
import ig from "images/ig.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_all">
          <ul className="footer_ft1">
            <li>
              <h4 className="footer_heading">Tokopedia</h4>
            </li>
            <li>
              <span>Tentang Tokopedia</span>
            </li>
            <li>
              <span>Hak kekayaan intelektual</span>
            </li>
            <li>
              <span>Karir</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>Bridestory</span>
            </li>
            <li>
              <span>Tokopedia Parents</span>
            </li>
            <li>
              <span>Mitra Blog</span>
            </li>
            <li>
              <span>Toko Points</span>
            </li>
            <li>
              <span>Tokopedia Affiliate Program</span>
            </li>
          </ul>
          <div className="footer_ft2">
            <ul className="footer_ft2__up">
              <li>
                <h4 className="footer_heading">Beli</h4>
              </li>
              <li>
                <span>Tagihan & Top Up</span>
              </li>
              <li>
                <span>Tukar Tambah Handphone</span>
              </li>
              <li>
                <span>Tokopedia COD</span>
              </li>
            </ul>
            <ul className="footer_ft2__down">
              <li>
                <h4 className="footer_heading">Jual</h4>
              </li>
              <li>
                <span>Pusat Edukasi Seller</span>
              </li>
              <li>
                <span>Mitra Toppers</span>
              </li>
              <li>
                <span>Daftar Official Store</span>
              </li>
            </ul>
          </div>
          <div className="footer_ft3">
            <ul className="footer_ft3__up">
              <li>
                <h4 className="footer_heading">Bantuan dan Panduan</h4>
              </li>
              <li>
                <span>Tokopedia Care</span>
              </li>
              <li>
                <span>Syarat dan Ketentuan</span>
              </li>
              <li>
                <span>Kebijakan Privasi</span>
              </li>
            </ul>
            <ul className="footer_ft3__down">
              <li>
                <h4 className="footer_heading">Keamanan</h4>
              </li>
              <li>
                <span className="ft3_1">
                  <div className="ft3_pci"></div>
                </span>
                <span className="ft3_1">
                  <div className="ft3_bsi"></div>
                </span>
              </li>
              <h4 className="footer_heading">Ikuti Kami</h4>
              <div className="ft3_follow">
                <span className="img_follow">
                  <img className="img-foll" src={fb} alt="Facebook" />
                </span>
                <span className="img_follow">
                  <img className="img-foll" src={tw} alt="Twitter" />
                </span>
                <span className="img_follow">
                  <img className="img-foll" src={pt} alt="Path" />
                </span>
                <span className="img_follow">
                  <img className="img-foll" src={ig} alt="Instagram" />
                </span>
              </div>
            </ul>
          </div>
          <div className="footer_ft4">
            <div className="ft4_1">
              <div className="ft4_bg" aria-label="footer background"></div>
            </div>
            <div
              className="ft4_2"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "16px 0px",
              }}
            >
              <span
                className="ft4_img1"
                aria-label="android"
                style={{ marginRight: 8 }}
              >
                &nbsp;
              </span>
              <span className="ft4_img2" aria-label="ios">
                &nbsp;
              </span>
            </div>
            <div className="ft4_3" style={{flexDirection: "row", margin: "16px 0px"}}>
                <span className="ft4_txt">© 2009 - 2021, PT. Tokopedia.</span>
            </div>
            <div className="ft4_4">
                <button className="btn_ind">Indonesia</button>
                <button className="btn_eng">English</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
