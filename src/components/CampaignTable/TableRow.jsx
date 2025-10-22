import { CAMPAIGN_TABLE_COLUMN } from '../../constants/tableColumns';

const TableRow = ({ rowData }) => {
  if (!rowData) return null;

  const columnKeys = Object.values(CAMPAIGN_TABLE_COLUMN);

  const getFormattedValue = (key) => {
    const value = rowData[key];

    if (key === 'amountSpent' || key === 'revenue') {
      return `$${value}`;
    }

    if (key === 'ctr' || key === 'cpc' || key === 'roi') {
      return value.toFixed(2);
    }
    
    return value;
  };
  
  return (
    <tr>
      {columnKeys.map((key) => (
        <td key={key}>
          {getFormattedValue(key)}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;