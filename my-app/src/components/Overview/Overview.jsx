import React from "react";
import "./Overview.scss";
import showAll from "../../assets/Icons/showAllBlue.svg";

const Overview = () => {
  return (
    <div className="overview">
      <div className="col">
        <div className="lg-overview">
          <h2>Telefon</h2>
          <p>Məhsul sayı: 322</p>
          <button>
            Məhsullara keçid <img src={showAll} alt="show all" />
          </button>
        </div>
      </div>
      <div className="col">
        <div className="sm-overview">
          <h2>Smart Saat</h2>
          <p>Məhsul sayı: 322</p>
          <button>
            Məhsullara keçid <img src={showAll} alt="show all" />
          </button>
        </div>
        <div className="sm-overview">
          <h2>Aksesuar</h2>
          <p>Məhsul sayı: 322</p>
          <button>
            Məhsullara keçid <img src={showAll} alt="show all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
