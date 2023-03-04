import styled from '@emotion/styled';

export const Transactions = styled.table`
    width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  text-align: center;
  background-color: #ffffff;
  color: grey;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;

export const TransactionBody = styled.tbody`
 
`;

export const TransactionHead = styled.thead`
 border: 1px solid #dadbde;
  background-color: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;
`;

export const TransactionTitle = styled.th`
    width: 33.3%;
    padding: 15px 5px;
`;

export const TransactionRow = styled.tr`
:nth-of-type(even) {
  background-color: #ecf1f4;
}
`;

export const TransactionDescription = styled.td`
 padding: 15px 5px;
text-transform: capitalize;
`;