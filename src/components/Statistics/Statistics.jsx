import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

export const Statistics = ({label, percentage}) => {
    return (
            <ul className="stat-list">
                <li className="item">
                    <span className="label"> {label} </span>
                    <span className="percentage">{percentage} %</span>
                </li>
            </ul>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}