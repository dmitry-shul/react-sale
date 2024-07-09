import React, { useEffect } from 'react';
import styles from "./Modal.module.css"

const Modal = ({children, visible, setVisible, ...props}) => {
  const stykeClasses = [styles.modal];

  if(visible) {
    stykeClasses.push(styles.active);
  }

  useEffect(()  => {
    visible 
    ? document.body.style = "overflow: hidden"
    : document.body.style = ""
  }, [visible])

  return (
    <div className={stykeClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={props.classModal ? props.classModal : styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal