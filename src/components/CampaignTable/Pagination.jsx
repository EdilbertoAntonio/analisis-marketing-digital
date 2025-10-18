import '../../assets/styles/CampaignTable/PageControl.css';

const Pagination = ({ currentPage = 1, totalPages = 1, totalItems = 0, itemsPerPage = 10, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const isAllItems = itemsPerPage === Infinity;

    const calculateShowingRange = () => {
        if (isAllItems) {
            return { start: 1, end: totalItems };
        }
        const start = (currentPage - 1) * itemsPerPage + 1;
        const end = Math.min(currentPage * itemsPerPage, totalItems);
        return { start, end };
    };

    const { start, end } = calculateShowingRange();

    return (
    <div className='table-footer'> 
        <div className='footer-text'>
            {isAllItems ? (
                `Showing all ${totalItems} entries`
            ) : (
                `Showing ${start} to ${end} of ${totalItems} entries`
            )}
        </div>

        <div className="footer-buttons">
            <button 
                className="circle-button"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                <span className="material-icons">chevron_left</span>
            </button>

            <div className="page-indicator">
                <input 
                    className='page-input'
                    type="text"
                    value={currentPage}
                    readOnly
                />
            </div>

            <button 
                className="circle-button"
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                <span className="material-icons">chevron_right</span>
            </button>
        </div>
    </div>
  );
};

export default Pagination;