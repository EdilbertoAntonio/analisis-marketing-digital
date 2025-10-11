import React from 'react';
import '../assets/styles/tooltip.css';

const Tooltip = ({icon = "help_outline", title}) => {
    return (
      <div className="tooltip-container">
        <i className="material-symbols-outlined" title={title}>{icon}</i>
      </div>
    );
  };
  
  export default Tooltip;