import { Statistics } from "./Statistics";
import PropTypes from 'prop-types';


function StatisticsList ({items}) {
    return (
    <ul className="stat-list">
        {items.map (item => (
            <li key={item.id}>
                <Statistics
                    label={item.label}
                    percentage={item.percentage}
                />
            </li>
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