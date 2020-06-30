import React from 'react';

function Notification(props) {
  return (
    <div className={props.notificationClass}>
        {props.child}    
        <p className="is-size-5"> 
            {props.text}
        </p>
        
    </div>
  );
}

export default Notification;