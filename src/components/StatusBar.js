import React from 'react';
import './StatusBar.css';

const StatusBar = ({ completionPercentage }) => {
    return (
        <div className="status-bar-container">
        { completionPercentage > 0 ?( <div className="status-bar" style={{ width: `${completionPercentage}%` }} data-percentage={completionPercentage}>
            <span className="status-bar-text">{`${parseInt(completionPercentage)}% Completed  `}</span>
          </div>) : (<span className="status-bar-text">Nothing achieved today :( </span>)}
        </div>
      );
};

export default StatusBar;
