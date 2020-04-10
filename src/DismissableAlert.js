import React, { useState, useRef, useEffect } from 'react'

const DismissableAlert = ({ message, notifyDismiss, timeout = 1000 }) => {
  const refContainer = useRef(null);
  const [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('fade-out');
      setTimeout(() => {
        notifyDismiss();
      }, 100);
    }, timeout);
  }, [timeout, notifyDismiss]);

  return (
    <div className={`dismissable-alert ${fade} text-success`} ref={refContainer}>
      {message}
    </div>
  );
};

export default DismissableAlert;
