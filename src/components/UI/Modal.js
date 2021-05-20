import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.BackDrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.ModalOverlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
