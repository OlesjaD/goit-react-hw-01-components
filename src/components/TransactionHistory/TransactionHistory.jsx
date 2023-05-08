import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const Transaction = ({type, amount, currency}) => {
    return (
        <tr className={css.item}>
            <td className={css.name}>{type}</td>
            <td className={css.name}>{amount}</td>
            <td className={css.name}>{currency}</td>
        </tr>
    )
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}