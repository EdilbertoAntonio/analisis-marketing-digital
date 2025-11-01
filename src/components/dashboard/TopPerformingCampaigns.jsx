import React from 'react';
import '../../assets/styles/Dashboard/charts.css';

const TopPerformingCampaigns = ({ campaigns }) => {

  const formatValue = (value, type) => {
    if (type === 'conversionRate') {
      return `${(value).toFixed(2)}%`; 
    }
    if (type === 'roas') {
      return `${value.toFixed(2)}`; 
    }
    return value;
  };

  return (
    <div className='chart-container'>
      <div className='chart-header'>
        <h3>
          <span className="material-icons check-icon">check_circle</span>
          Top Performing Campaigns - last 30 days
        </h3>
      </div>
      <table className="kpi-table">
        <thead>
          <tr>
              <th>Campaign</th>
              <th>ROAS</th>
              {/* <th>Conv. Rate</th> */}
          </tr>
        </thead>
        <tbody className='table-body'>
            {campaigns
            .slice(0, 8)
            .map((kpi, index) => (
              <tr key={index}>
                <td>{kpi.name}</td>
                <td>{formatValue(kpi.roas, 'roas')}</td>
                {/* <td>{formatValue(kpi.conversionRate, 'conversionRate')}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformingCampaigns;