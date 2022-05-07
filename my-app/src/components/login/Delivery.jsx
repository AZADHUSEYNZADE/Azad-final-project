import React from "react";
import "./delivery.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Delivery() {
  return (
    <div className="container deliveryMainDiv">
      <div className="deliveryLeftSide">
        <h5>Ödəmə</h5>
        <div className="infoLine"></div>
        <div className="deliveryInformation">
          <div>
            <h6>1.Şəxsi məlumatlar</h6>
            <ul>
              <li>Gunel Mammadova</li>
              <li>+994 77 566 73 27</li>
              <li>gyunelmammedova@gmail.com</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <span className="remakeSpan">Düzəliş et</span>
            <CheckCircleOutlineIcon className="checkIcon" />
            <div className="checkIconMobileTop">
              <span>Düzəliş et</span>
              <CheckCircleOutlineIcon className="checkTop" />
            </div>
          </div>
        </div>
        <div className="infoLine"></div>

        <div className="deliveryInformation">
          <div>
            <h6>2. Çatdırılma</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon className="checkIcon" />
            <CheckCircleOutlineIcon className="checkIconMobile" />
          </div>
        </div>
        <div className="deliveryInformation">
          <div>
            <p>Ünvan</p>
            <input type="text" placeholder="Ünvanı daxil edin" />
          </div>
          <div>
            <p>Bina/Mənzil</p>
            <input type="text" placeholder="Daxil edin" />
          </div>
        </div>
        <div>
          <p>Kuryer üçün əlavə qeydlər</p>
          <input
            className="courierInput"
            type="text"
            placeholder="Mətni daxil edin..."
          />
        </div>

        <button className="saveButtonDelivery">Yadda saxla </button>

        <div className="infoLine"></div>
        <div className="deliveryInformation">
          <div>
            <h6 style={{ color: "#828282" }}> 3. Ödəmə üsulu</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon className="checkIcon" />
            <CheckCircleOutlineIcon className="checkIconMobile" />
          </div>
        </div>
      </div>
      <div className="deliveryRıghtSide">
        <h6>Ümumi</h6>
        <ul>
          <li>
            <span>Məbləğ </span>
            <span>65.00$</span>
          </li>
          <li>
            <span>Çatdırılma </span>
            <span>0.00 $</span>
          </li>
          <li>
            <span>Hədiyyə paketi </span>
            <span>5.00 $</span>
          </li>
          <li>
            <span>Promo kod </span>
            <span>-10.00 $</span>
          </li>
          <div className="totalLine"></div>
          <li className="totalLiDiv">
            <span className="totalName">Cəmi </span>
            <span className="total">65.50 $</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Delivery;
