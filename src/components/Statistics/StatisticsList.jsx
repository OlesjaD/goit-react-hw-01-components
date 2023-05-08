import { Statistics } from "./Statistics";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function StatisticsList ({items}) {
    return (
    <ul className={css.statList}>
        {items.map (item => (
                <Statistics
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}
                />
        ))}            
    </ul>)
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf
        (PropTypes.shape(
            {id: PropTypes.string.isRequired,}
        ),
    ),
};

export default StatisticsList;