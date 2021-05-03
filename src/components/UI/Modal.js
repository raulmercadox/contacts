import React from 'react';
import Drop from './Drop';
import Overlay from './Overlay';
import {useState} from "react";

const Modal = (props) => {
    return (<React.Fragment>
        <Drop onClose={props.onClose}></Drop>
        <Overlay message={props.message} onClose={props.onClose}></Overlay>
    </React.Fragment>);
}

export default Modal;