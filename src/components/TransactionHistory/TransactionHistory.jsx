import PropTypes from 'prop-types';
import {
  Table,
  TableData,
  TableHead,
  TableHeadTitle,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadTitle>Type</TableHeadTitle>
          <TableHeadTitle>Amount</TableHeadTitle>
          <TableHeadTitle>Currency</TableHeadTitle>
        </TableRow>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
};
