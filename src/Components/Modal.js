import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal-wrapper" style={{
            transform:props.show?'translateY(0vh)':'translateY(-100vh)',
            opacity:props.show?'1':'0'
        }}>
           <div className="modal-header"></div>
           <div className="modal-body"></div>
           <div className="modal-footer">
              <button onClick={props.handleClose}>Close</button>
           </div>
        </div>
    );
};

export default Modal;