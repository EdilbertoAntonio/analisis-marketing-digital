import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/TopBar";

const CampaignsTable = () => {
    
    return (
        <div className="page-layout">
            <Sidebar/>
            <div className="page-content">
                <Topbar/>
                <div>
                    Page content
                </div>
            </div>
        </div>
    )

}

export default CampaignsTable;