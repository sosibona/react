import React from "react";
import moment from "moment";

const Transaction = ({ time, from, to, rate, amount }) => {
  const transactionDate = moment(time).format("DD MMM");
  const transactionTime = moment(time).format("HH:mm");
  return (
    <li className="transaction">
      <span className="transaction__date">{transactionDate}</span>
      <span className="transaction__time">{transactionTime}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">
        {new Intl.NumberFormat("en-GB").format(amount)}
      </span>
    </li>
  );
};

export default Transaction;
