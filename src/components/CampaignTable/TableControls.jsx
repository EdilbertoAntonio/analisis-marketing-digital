import '../../assets/styles/CampaignTable/TableControl.css';
import FilterMenu from './FilterMenu';
import { useState } from 'react';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Select from '../../components/Select';

const TableControls = ({ onSearch, onItemsPerPageChange, onFilterApply }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    const handleItemsPerPageChange = (e) => {
        onItemsPerPageChange(e.target.value);
    };

    return (
    <div className='table-controls'>
        
        <div className='left-controls'>
            <div className='search-field'>
                <Input
                    type="text"
                    id="searchCampaign"
                    placeholder="Search Campaigns ..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    noMargin={true}
                />
            </div>
        
            <FilterMenu onFilterApply={onFilterApply} />
                  
        </div>
        
        <div className='right-controls'>
            <Label className='rows-label'>
                Rows per page:
            </Label>
            <div className="rows-select"> 
                <Select 
                    onChange={handleItemsPerPageChange} 
                    defaultValue='10'   
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </Select>
            </div>
        </div>
        
    </div>
    )
}

export default TableControls;