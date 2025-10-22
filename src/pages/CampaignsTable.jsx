import { useState, useEffect } from 'react';
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/TopBar";
import Table from '../components/CampaignTable/Table';
import Pagination from '../components/CampaignTable/Pagination';
import TableControls from '../components/CampaignTable/TableControls';
import data from '../data/data.json'
import { CAMPAIGN_TABLE_COLUMN } from '../constants/tableColumns';

const CampaignsTable = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [filters, setFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const TABLE_COLUMNS = Object.keys(CAMPAIGN_TABLE_COLUMN);

    useEffect(() => {
        let result = [...data];
        
        if (searchTerm) {
            result = result.filter(item => 
                item.campaignName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.platform?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (filters.startDate) {
            result = result.filter(item => 
                new Date(item.startDate) >= new Date(filters.startDate)
            );
        }
        
        if (filters.endDate) {
            result = result.filter(item => 
                new Date(item.endDate) <= new Date(filters.endDate)
            );
        }
        
        if (filters.platform) {
            result = result.filter(item => 
                item.platform === filters.platform
            );
        }
        
        setFilteredData(result);
        setCurrentPage(1); 
    }, [filters, searchTerm, data]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsPerPage === Infinity 
        ? filteredData 
        : filteredData.slice(indexOfFirstItem, indexOfLastItem);
    
    const totalPages = itemsPerPage === Infinity ? 1 : Math.ceil(filteredData.length / itemsPerPage);

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(parseInt(value));
        setCurrentPage(1);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <div className="page-layout">
            <Sidebar/>
            <div className="page-content">
                <Topbar/>
                <div>
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

                            <TableControls 
                                onSearch={handleSearch}
                                onItemsPerPageChange={handleItemsPerPageChange}
                                onFilterApply={setFilters}
                            />

                        </div>

                        <Table 
                            columns={TABLE_COLUMNS} 
                            data={currentItems} 
                        />

                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            totalItems={filteredData.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                        />
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignsTable;