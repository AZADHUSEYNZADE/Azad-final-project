import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./payment-method.scss";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Link } from "react-router-dom";
function PaymentMethod() {
  return (
    <div className="container paymentMainDiv">
      <div className="paymentLeftSide">
        <h5>Ödəmə</h5>
        <div className="infoLine"></div>
        <div className="paymentInformation">
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
            <span className="remakeSpanPayment">Düzəliş et</span>
            <CheckCircleOutlineIcon className="checkIconPayment" />
            <div className="checkIconMobileTopPayment">
              <span>Düzəliş et</span>
              <CheckCircleOutlineIcon className="checkTopPayment" />
            </div>
          </div>
        </div>
        <div className="paymentInformation">
          <div>
            <h6> 2. Çatdırılma</h6>
            <ul>
              <li>Mehmandarov küçəsi 28 </li>
              <li>Bina 39, Mənzil 200</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <span className="remakeSpanPayment">Düzəliş et</span>
            <CheckCircleOutlineIcon className="checkIconPayment" />
            <div
              className="checkIconMobileTopPayment"
              style={{ position: "absolute", bottom: "70px" }}
            >
              <span>Düzəliş et</span>
              <CheckCircleOutlineIcon className="checkTopPayment" />
            </div>
          </div>
        </div>

        <div className="infoLine"></div>
        <div className="paymentInformation">
          <div>
            <h6> 3. Ödəmə üsulu</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon className="checkIconPayment" />
            <CheckCircleOutlineIcon className="checkIconMobilePayment" />
          </div>
        </div>
        <div className="onlinePayment">
          <div className="online">
            <PaymentIcon />
            <span>Onlayn kart ilə ödəmə </span>
          </div>
          <div className="cash">
            <LocalAtmIcon />
            <span>Qapıda nağd ödəmə </span>
          </div>
        </div>
        <Link to="/user-information-profile">
          <button className="saveButtonPayment">Təsdiq et </button>
        </Link>
      </div>
      <div className="paymentRightSide">
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

export default PaymentMethod;
