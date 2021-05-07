import { Fragment } from "react";
import mealImage from "../../assets/meals.jpeg";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
