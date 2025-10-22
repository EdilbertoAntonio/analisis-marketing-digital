import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../../assets/styles/CampaignTable/TableContainer.css';

const Table = ({ columns, data }) => {

  return (
    
    <div className="table-scroll-container">

        <table>
            <TableHeader columns={columns} />
            <tbody>
              {data && data.length > 0 ? (
                data?.map((row, index) => (
                    <TableRow 
                      key={`row-${index}`} 
                      rowData={row} 
                    />
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="no-data">
                      No campaigns found matching your criteria.
                  </td>
                </tr>               
              )}

            </tbody>
        </table>

    </div>
  );
};

export default Table;