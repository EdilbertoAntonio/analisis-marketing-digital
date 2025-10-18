import '../../assets/styles/CampaignTable/TableControl.css';
import FilterMenu from './FilterMenu';
import { useState } from 'react';

const TableControls = ({}) => {

    const [filters, setFilters] = useState({});
    
    const applyFilters = (data) => {
        return data.filter(item => {
            if (filters.date && item.date !== filters.date) return false;
            if (filters.platform && item.platform !== filters.platform) return false;
            return true;
        });
    };
      
    //const filteredData = applyFilters(data);
    return (
    <div className='table-controls'>
        
        <div className='left-controls'>
            <div className='search-field'>
                <input
                    type="text"
                    id="searchCampaign"
                    placeholder="Search Campaigns ..."
                    className='input-table'
                />
            </div>
        
            <FilterMenu onFilterApply={setFilters} />
                  
            <div className='download-container'>  {/* Revisar esta parte */}
                <button className='download-btn'>
                    <span className="material-icons">download</span>
                      
                </button>
                <span className="download-tooltip">Download the table in a .csv format.</span>          
            </div>
        </div>
        
        <div className='right-controls'>
            <label className='rows-label'>
                Rows per page:
            </label>
            <div className="rows-select"> 
                <select>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
        
    </div>
    )
}

export default TableControls;