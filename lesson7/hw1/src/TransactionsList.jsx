import React from "react";
import moment from "moment";
import Transaction from "./Transaction";

const TransactionsList = props => {
  const transactionsList = props.transactions.map(transaction => {
    return <Transaction key={transaction.id} {...transaction} />;
  });
  return <ul className="transactions">{transactionsList}</ul>;
};

export default TransactionsList;
