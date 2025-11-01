import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/TopBar";
import KpiCards from '../components/dashboard/KpiCards';
import KpiCharts from '../components/dashboard/KpiCharts';
import '../assets/styles/Dashboard/dashboard.css';
import cardData from '../data/dashboard/cards_data.json'
import roiDataLast7Days from '../data/dashboard/roi_last_7_days.json'
import roiDataLast30Days from '../data/dashboard/roi_last_30_days.json'
import roiDataThisMonth from '../data/dashboard/roi_this_month.json'
import roiDataLastMonth from '../data/dashboard/roi_last_month.json'
import trendsData from '../data/dashboard/trends_data.json'
import performanceCluster from '../data/dashboard/performing_data.json'
import AmountSpentPerPlatform from '../data/dashboard/spent_data.json'
import highRiskKpiData from '../data/dashboard/high_risk_data.json'
import topCampaignsData from '../data/dashboard/top_campaigns_data.json'

const Dashboard = () => {

    const roiDataMap = {
        'Last 7 Days': roiDataLast7Days,
        'Last 30 Days': roiDataLast30Days,
        'This Month': roiDataThisMonth,
        'Last Month': roiDataLastMonth
    };

    return (
        <div className="page-layout">
            <Sidebar/>
            <div className="page-content">
                <Topbar/>
                <main className='dashboard-main'>
                    <div className="kpi-dashboard DivWithScroll">
                        <KpiCards data={cardData} />
                        <KpiCharts 
                            roiData={roiDataMap}
                            trendsData={trendsData}
                            clusterPerformance={performanceCluster}
                            spentData={AmountSpentPerPlatform}
                            highRiskKpiData={highRiskKpiData}
                            topCampaignsData={topCampaignsData}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;