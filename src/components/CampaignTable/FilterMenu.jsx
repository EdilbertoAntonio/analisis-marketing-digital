import { useState, useEffect, useRef } from 'react';
import '../../assets/styles/CampaignTable/TableControl.css';
import '../../assets/styles/CampaignTable/FilterControl.css';
import { PLATFORMS_LIST } from '../../constants/platforms';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Select from '../../components/Select';

const FilterMenu = ({ onFilterApply }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const filterRef = useRef(null);

    const platforms = PLATFORMS_LIST;

    const handleFilterClick = (filterType) => {
        setActiveFilter(filterType);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsOpen(false);
                setActiveFilter(null);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

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
        <div className="filter-container" ref={filterRef}>
            <Button 
                className='filter-btn' 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-icons">filter_alt</span>
                Filter
            </Button>

            {isOpen && (
                <div className="filter-dropdown">
                    <div className="filter-options">
                        <Button 
                            className={`filter-option ${activeFilter === 'startDate' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('startDate')}
                        >
                            Start Date
                        </Button>
                        <Button 
                            className={`filter-option ${activeFilter === 'endDate' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('endDate')}
                        >
                            End Date
                        </Button>
                        <Button 
                            className={`filter-option ${activeFilter === 'platform' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('platform')}
                        >
                            Platform
                        </Button>
                    </div>

                    <div className="filter-selection">
                        {activeFilter === 'startDate' && (
                            <div className="filter-date">
                                <Label>Select start date:</Label>
                                <Input 
                                    type="date" 
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                        )}

                        {activeFilter === 'endDate' && (
                            <div className="filter-date">
                                <Label>Select end date:</Label>
                                <Input 
                                    type="date" 
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        )}

                        {activeFilter === 'platform' && (
                            <div className="filter-platform">
                                <Label>Select platform:</Label>
                                <Select
                                    value={selectedPlatform}
                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                >
                                    <option value="">All platforms</option>
                                    {platforms.map(platform => (
                                        <option key={platform} value={platform}>
                                            {platform}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        )}
                    </div>

                    <div className="filter-actions">
                        <Button onClick={handleResetFilters}>Reset</Button>
                        <Button onClick={handleApplyFilter}>Apply</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterMenu;