import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../../assets/styles/CampaignTable/TableContainer.css';

const Table = ({ columns, data }) => {

  return (
    
    <div className="table-scroll-container">

        <table style={{width: "100%"}}> {/*arreglar esto*/}
            <TableHeader columns={columns} />
            <tbody>
                {data?.map((row, index) => (
                    <TableRow key={`row-${index}`} rowData={row} />
                ))}
            </tbody>
        </table>

    </div>
  );
};

export default Table;