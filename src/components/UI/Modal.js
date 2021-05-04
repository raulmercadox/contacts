import React from 'react';
import Drop from './Drop';
import Overlay from './Overlay';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Drop onClose={props.onClose}></Drop>, document.getElementById('root-drop'))}
            {ReactDOM.createPortal(<Overlay message={props.message} onClose={props.onClose}></Overlay>, document.getElementById('root-overlay'))}
        </React.Fragment>
    );
}

export default Modal;