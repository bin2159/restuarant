import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Styles from './Modal.module.css';

const Backdrop = ({showCartHandler}) => {
  const cartHandler=()=>{
    showCartHandler()
  }
  return <div className={Styles.backdrop} onClick={cartHandler}></div>;
};

const ModalOverlay = ({children}) => {
  return (
    <div className={Styles['modal-overlay']}>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = ({showCartHandler,children}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop showCartHandler={showCartHandler} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;