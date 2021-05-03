import React from 'react';
import Drop from './Drop';
import Overlay from './Overlay';

const Modal = (props) => {
    return <React.Fragment>
        <Drop></Drop>
        <Overlay message={props.message}></Overlay>
    </React.Fragment>
}

export default Modal;