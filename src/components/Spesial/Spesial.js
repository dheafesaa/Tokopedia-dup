import React from "react";
import sp1 from "../../images/sp1.jpg";
import sp2 from "../../images/sp2.jpg";
import sp3 from "../../images/sp3.jpg";
import "./Spesial.scss";

const Spesial = () => {
  return (
    <section className="spesial">
      <div className="spesial_channel">
        <div className="spesial_banner"></div>
        <section className="spesial_card">
          <div className="spesial_head">
            <div className="spesial_title">
              <h2 className="spesial_name">Spesial di Tokopedia hari ini</h2>
            </div>
          </div>
          <div className="spesial_body">
            <div className="sp1">
              <div className="sp1_1">
                <img className="img-spesial" src={sp1} alt="Sp1" />
              </div>
            </div>
            <div className="sp2">
              <div className="sp2_1">
                <img className="img-spesial" src={sp2} alt="Sp2" />
              </div>
            </div>
            <div className="sp3">
              <div className="sp3_1">
                <img className="img-spesial" src={sp3} alt="Sp3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Spesial;
