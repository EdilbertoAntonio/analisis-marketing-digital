const TableHeader = ({ columns }) => {
  return (
    <thead>
        <tr>
            {columns.map((column, index) => (
                <th key={`header-${index}`}>{column}</th>
            ))}
        </tr>
    </thead>
  );
};

export default TableHeader;