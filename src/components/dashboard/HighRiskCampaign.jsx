import React from 'react';
import '../../assets/styles/Dashboard/charts.css';

const HighRiskCampaign = ({ kpis }) => {

  const formatValue = (value, type) => {
    if (type === 'roi') {
      return `${(value * 100).toFixed(2)}%`; 
    }
    if (type === 'cpc') {
      return `$${value.toFixed(2)}`; 
    }
    return value;
  };

  return (
    <div className='chart-container'>
      <div className='chart-header'>
        <h3>
          <span className="material-icons warning-icon">
            warning
          </span>
          High Risk Campaign - last 30 days
        </h3>
      </div>
      <table className="kpi-table">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>ROI</th>
            {/* <th>CPC</th> */}
          </tr>
        </thead>
        <tbody className='table-body'>
          {kpis
          .slice(0,8)
          .map((kpi, index) => (
            <tr key={index}>
              <td>{kpi.name}</td>
              <td>{formatValue(kpi.roi, 'roi')}</td>
              {/* <td>{formatValue(kpi.cpc, 'cpc')}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighRiskCampaign;