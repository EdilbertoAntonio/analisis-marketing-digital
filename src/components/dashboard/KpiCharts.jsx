import React from 'react';
import ROIByWeekday from './ROIByWeekday';
import CPCCPMTrends from './CPCCPMTrends';
import CampaignClusters from './CampaignClusters';
import AdSpendByPlatform from './AdSpendByPlatform'
import HighRiskCampaign from './HighRiskCampaign';
import TopPerformingCampaigns from './TopPerformingCampaigns';
import '../../assets/styles/Dashboard/charts.css';

const KpiCharts = ({
    roiData, 
    trendsData, 
    clusterPerformance, 
    spentData, 
    highRiskKpiData, 
    topCampaignsData
    }) => {

    return (
        <div className="kpi-grid-charts">
            <div className="charts-container">
                <ROIByWeekday dataMap={roiData} />
            </div>
            <div className="charts-container">
                <AdSpendByPlatform data={spentData} />
            </div>
            <div className="charts-container">
                <CPCCPMTrends data={trendsData} />
            </div>
            <div className="charts-container">
                <CampaignClusters data={clusterPerformance} />
            </div>
            <div className="charts-container">
                <HighRiskCampaign kpis={highRiskKpiData} />
            </div>
            <div className="charts-container">
                <TopPerformingCampaigns campaigns={topCampaignsData} />
            </div>
        </div>
    );
    };

export default KpiCharts;