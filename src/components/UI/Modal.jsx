import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Styles from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={Styles.backdrop} />;
};

const ModalOverlay = ({children}) => {
  return (
    <div className={Styles['modal-overlay']}>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = ({children}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;