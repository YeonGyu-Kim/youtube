import React from "react";
import { Link } from "react-router-dom";

const RowList = ({ title }) => {
  return (
    <li>
      <span>{title}</span>
    </li>
  );
};

export default RowList;
