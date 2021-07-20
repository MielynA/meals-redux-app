import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHiglighted, setBtnIsHiglighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHiglighted(true);
    const timer = setTimeout(() => {
      setBtnIsHiglighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />{" "}
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
