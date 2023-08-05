import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const sortedListAsc = useMemo(
    () =>[...props.items].sort((a, b) => a - b),
    [props.items]
  );
  console.log(sortedListAsc)


  const sortedListDesc = useMemo(
    () => [...props.items].sort((a,b) => b - a),
    [props.items]
  );
  
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList(sortedListAsc);
    console.log(props.order);
    if (props.order) {
      setOrderList(sortedListDesc);
    }

  }, [props.order, sortedListAsc, sortedListDesc]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {orderList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
