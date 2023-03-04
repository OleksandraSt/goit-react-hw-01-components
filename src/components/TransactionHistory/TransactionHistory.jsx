import PropTypes from 'prop-types';
import {
    Transactions,
    TransactionBody,
    TransactionHead,
    TransactionTitle,
      TransactionRow,
      TransactionDescription
    
  } from './TransactionHistory.styled';

  export const TransactionHistory = ({ items }) => {
    return (
      <Transactions>
        <TransactionHead>
          <TransactionRow>
            <TransactionTitle>Type</TransactionTitle>
            <TransactionTitle>Amount</TransactionTitle>
            <TransactionTitle>Currency</TransactionTitle>
          </TransactionRow>
        </TransactionHead>
  
        <TransactionBody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionRow key={id}>
              <TransactionDescription>{type}</TransactionDescription>
              <TransactionDescription>{amount}</TransactionDescription>
              <TransactionDescription>{currency}</TransactionDescription>
            </TransactionRow>
          ))}
        </TransactionBody>
      </Transactions>
    );
  };

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };