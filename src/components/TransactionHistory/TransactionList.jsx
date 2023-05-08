import { Transaction } from "./TransactionHistory";
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

function TransactionList ({items}) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.transactionHead}>
                <tr>
                    <th className={css.details}>Type</th>
                    <th className={css.details}>Amount</th>
                    <th className={css.details}>Currency</th>
                </tr>
            </thead>

            <tbody>
                    {items.map (item => (
                        <Transaction key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    ))} 
            </tbody>
        </table>
    )
}

TransactionList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
}

export default TransactionList;