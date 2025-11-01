import React from 'react';
import '../../assets/styles/Dashboard/cards.css'; 

const Card = ({ title, value, suffix = "", icon, trend , iconClass="", iconType="material" }) => {

    const isPositive = trend?.percentage >=0;

    return (
        <div className="kpi-card">
            <div className="kpi-header">
                {iconType === "material" ? (
                <span className={`material-icons kpi-icon ${iconClass}`}>{icon}</span>
                ) : (
                <span className={`material-symbols-outlined kpi-icon ${iconClass}`}>{icon}</span>
                )}
                <span className="kpi-title">{title}</span>
            </div>

            <p className="kpi-value">{value} {suffix}</p>

            {trend && (
                <p className={`kpi-trend ${isPositive ? 'positive' : 'negative'}`}>
                    {isPositive ? '▲' : '▼'} {isPositive ? '+' : '-'} {Math.abs(trend.percentage)}% <span className="kpi-compare">vs last month</span> 
                </p>
            )}
        </div>
    );
};

export default Card;