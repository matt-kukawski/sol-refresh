import React from 'react';

function Notification(props) {
  return (
    <div className="notification has-background-warning">
        {props.child}    
        <p className="is-size-5"> 
            {props.text}
        </p>
        
    </div>
  );
}

export default Notification;