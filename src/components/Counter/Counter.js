import React, { useState } from "react";
import "./styles.css";

function Counter(props) {
  const [count, setCount] = useState(props.current || 1);

  return (
    <div className="component">
      <button
        className="button"
        onClick={() => {
          if (props?.data) {
            if (localStorage.getItem("products")) {
              let productsArray = JSON.parse(localStorage.getItem("products"));
              let objIndex = productsArray.findIndex(
                (obj) => obj.data.id === props?.data.data.id
              );
              productsArray[objIndex].counter = count + 1;
              localStorage.setItem("products", JSON.stringify(productsArray));
              props.setIsReload(true);
            }
          } else {
          }
          setCount(count + 1);
          props.setQuantity(count + 1);
        }}
      >
        +
      </button>
      <h3>{count}</h3>
      <button
        className="decrease button"
        disabled={count === 1}
        onClick={() => {
          if (props?.data) {
            if (props?.data) {
              if (localStorage.getItem("products")) {
                let productsArray = JSON.parse(
                  localStorage.getItem("products")
                );
                let objIndex = productsArray.findIndex(
                  (obj) => obj.data.id === props?.data.data.id
                );
                productsArray[objIndex].counter = count - 1;
                localStorage.setItem("products", JSON.stringify(productsArray));
                props.setIsReload(true);
              }
            } else {
            }
          }
          setCount(count - 1);
          props.setQuantity(count - 1);
        }}
      >
        &ndash;
      </button>
    </div>
  );
}

export default Counter;
