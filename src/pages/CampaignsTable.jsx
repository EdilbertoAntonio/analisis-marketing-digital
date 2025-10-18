import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/TopBar";
import Table from '../components/CampaignTable/Table';
import Pagination from '../components/CampaignTable/Pagination';
import TableControls from '../components/CampaignTable/TableControls';

const TABLE_COLUMNS = [
    'Start Date',
    'End Date',
    'Campaign',
    'Platform',
    'Clicks',
    'Conversions',
    'Spent',
    'Revenue',
    'CTR',
    'CPC',
    'ROI'
];

const CampaignsTable = () => {
    const campaignData = [];
    
    return (
        <div className="page-layout">
            <Sidebar/>
            <div className="page-content">
                <Topbar/>
                
                    <h2 className="header-icon">
                        <i className="material-symbols-outlined">table</i>
                        Data Table
                    </h2>
                    <div className="table-wrapper"> 
                        <div className="table-top">

                            <h2 className="header-icon">
                                <i className="material-symbols-outlined">database</i>
                                Campaign Metrics Data
                            </h2>

                            <TableControls />

                            <Table 
                                columns={TABLE_COLUMNS} 
                                data={campaignData} 
                            />

                        </div>

                        <Pagination />
            
                    </div>
                
            </div>
        </div>
    );
};

export default CampaignsTable;