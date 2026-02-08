import React from "react";
function Brockrage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculater</h3>
          </a>
          <ul style={{textAlign:"left", lineHeight:"2.3", fontSize:"14px"}} className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order
            </li>
            <li>Ditgital contract notes will be sent via e-mail.</li>
            <li>
              Physical copy of contact note,if required, shal be charged ₹20 per
              contract note.couriar charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order
              quility(whichever is lower).{" "}
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for
              equlity(whichever is lower).
            </li>
            <li>
              {" "}
              If the account is in debit balance, any order place will be
              changed ₹40 per executed instead of ₹20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brockrage;
