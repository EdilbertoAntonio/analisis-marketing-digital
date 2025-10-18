import { useState } from 'react';
import '../../assets/styles/CampaignTable/TableControl.css';
import '../../assets/styles/CampaignTable/FilterControl.css';
import { PLATFORMS_LIST } from '../../constants/platforms';

const FilterMenu = ({ onFilterApply }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const platforms = PLATFORMS_LIST;

    const handleFilterClick = (filterType) => {
        setActiveFilter(filterType);
    };

    const handleApplyFilter = () => {
        const filters = {};
        if (startDate) filters.startDate = startDate;
        if (endDate) filters.endDate = endDate;
        if (selectedPlatform) filters.platform = selectedPlatform;
    
        onFilterApply(filters);
        setIsOpen(false);
        setActiveFilter(null);
    };

    const handleResetFilters = () => {
        setStartDate('');
        setEndDate('');
        setSelectedPlatform('');
        onFilterApply({});
    };

    return (
        <div className="filter-container">
            <button 
                className='filter-btn' 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-icons">filter_alt</span>
                Filter
            </button>

            {isOpen && (
                <div className="filter-dropdown">
                    <div className="filter-options">
                        <button 
                            className={`filter-option ${activeFilter === 'startDate' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('startDate')}
                        >
                            Start Date
                        </button>
                        <button 
                            className={`filter-option ${activeFilter === 'endDate' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('endDate')}
                        >
                            End Date
                        </button>
                        <button 
                            className={`filter-option ${activeFilter === 'platform' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('platform')}
                        >
                            Platform
                        </button>
                    </div>

                    <div className="filter-selection">
                        {activeFilter === 'startDate' && (
                            <div className="filter-date">
                                <label>Select start date:</label>
                                <input 
                                    type="date" 
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                        )}

                        {activeFilter === 'endDate' && (
                            <div className="filter-date">
                                <label>Select end date:</label>
                                <input 
                                    type="date" 
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        )}

                        {activeFilter === 'platform' && (
                            <div className="filter-platform">
                                <label>Select platform:</label>
                                <select
                                    value={selectedPlatform}
                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                >
                                    <option value="">All platforms</option>
                                        {platforms.map(platform => (
                                            <option key={platform} value={platform}>{platform}</option>
                                        ))}
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="filter-actions">
                        <button onClick={handleResetFilters}>Reset</button>
                        <button onClick={handleApplyFilter}>Apply</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterMenu;