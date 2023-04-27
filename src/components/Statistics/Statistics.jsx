import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({label, percentage}) => {
    return (
            <ul className={css.statList}>
                <li className={css.item}>
                    <span className={css.label}> {label} </span>
                    <span className={css.percentage}> {percentage} %</span>
                </li>
            </ul>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}