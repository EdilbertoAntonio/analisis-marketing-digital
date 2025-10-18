const TableRow = ({ rowData }) => {
  if (!rowData) return null;
  
  return (
    <tr>
        {Object.values(rowData).map((value, index) => (
            <td key={`cell-${index}`}>{value}</td>
        ))}
    </tr>
  );
};

export default TableRow;