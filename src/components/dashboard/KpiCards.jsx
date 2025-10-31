import React from 'react';
import Card from './Card';
import '../../assets/styles/Dashboard/cards.css'; 

const KpiCards = ({ data }) => {

    const KPI_METRICS = [
        {
            title: 'Total Revenue',
            valueKey: 'revenue',
            icon: 'attach_money',
            iconClass: 'green'
        },
        {
            title: 'Total Conversions',
            valueKey: 'conversions',
            icon: 'group',
            iconClass: 'blue'
        },
        {
            title: 'Average ROAS',
            valueKey: 'roas',
            icon: 'trending_up',
            iconClass: 'purple'
        },
        {
            title: 'Average CPC',
            valueKey: 'cpc',
            icon: 'earthquake',
            iconClass: 'red',
            iconType: 'symbol'
        }
    ];
    return (
        <div className="kpi-grid">
            {KPI_METRICS.map((metric) => (
                <Card
                    key={metric.valueKey}
                    title={metric.title}
                    value={['cpc', 'revenue'].includes(metric.valueKey) ? `$${data[metric.valueKey].value.toFixed(2)}` : data[metric.valueKey].value.toFixed(2)}
                    icon={metric.icon}
                    trend={{ percentage: data[metric.valueKey].change.toFixed(2) }}
                    iconClass={metric.iconClass}
                    iconType={metric.iconType}
                />
            ))}
        </div>
    );
};

export default KpiCards;